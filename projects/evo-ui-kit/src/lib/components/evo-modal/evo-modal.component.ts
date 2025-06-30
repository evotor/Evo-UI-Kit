import {
    ChangeDetectionStrategy,
    Component,
    computed,
    createComponent,
    DestroyRef,
    ElementRef,
    EnvironmentInjector,
    inject,
    Injector,
    model,
    OnDestroy,
    OnInit,
    signal,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {filter, finalize, fromEvent, Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import {EvoButtonColor, EvoButtonComponent, EvoButtonTheme} from '../evo-button';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {EVO_MODAL_DATA, EVO_MODAL_ROOT_ID} from './tokens';
import {NgTemplateOutlet} from '@angular/common';
import {EvoDynamicModalParams, EvoModalCombinedParams, EvoModalState} from './interfaces';
import {EvoModalService} from './evo-modal.service';
import {isConfiguredComponentModalParams, isConfiguredTemplateModalParams, isDynamicModalParams} from './utils';
import {EvoModalCloseTargets} from './enums';
import {EvoModalDrawingStrategy} from './classes/EvoModalDrawingStrategy';
import {EvoDynamicModalDrawingStrategy} from './classes/EvoDynamicModalDrawingStrategy';
import {EvoConfiguredComponentModalDrawingStrategy} from './classes/EvoConfiguredComponentModalDrawingStrategy';
import {EvoConfiguredTemplateModalDrawingStrategy} from './classes/EvoConfiguredTemplateModalDrawingStrategy';
import {EvoModalButtonsComponent} from './evo-modal-buttons/evo-modal-buttons.component';

type InsertionContainerType = 'modal' | 'content';

@Component({
    selector: 'evo-modal',
    templateUrl: './evo-modal.component.html',
    styleUrls: ['./evo-modal.component.scss'],
    standalone: true,
    imports: [
        EvoButtonComponent,
        NgTemplateOutlet,
        EvoModalButtonsComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoModalComponent implements OnInit, OnDestroy {

    // eslint-disable-next-line @typescript-eslint/member-ordering
    private readonly evoModalRootId = inject(EVO_MODAL_ROOT_ID);

    acceptText = model<string>('');
    acceptButtonColor = model<EvoButtonColor>(`success`);
    acceptButtonTheme = model<EvoButtonTheme>(`rounded-solid`);
    asyncAccept = model<() => Observable<unknown> | null>(null);
    declineText = model<string>('');
    declineButtonColor = model<EvoButtonColor>('secondary');
    declineButtonTheme = model<EvoButtonTheme>('rounded-outline');
    id = model<string>(this.evoModalRootId);
    titleText = model<string>('');

    readonly contentContainer = viewChild('contentContainer', {read: ViewContainerRef});
    readonly contentContainer$ = toObservable(this.contentContainer);
    readonly drawingStrategy = signal<EvoModalDrawingStrategy | null>(null);
    readonly isDynamicContent = signal<boolean>(false);
    readonly isLoading = signal<boolean>(false);
    readonly isVisible = computed((): boolean => this.modalState()?.isOpen || false);
    readonly modalContainer = viewChild('modalContainer', {read: ViewContainerRef});
    readonly modalContainer$ = toObservable(this.modalContainer);
    readonly modalContent = signal<{template: TemplateRef<{data: unknown}>, context: unknown} | null>(null);
    readonly modalElement = viewChild('modal', {read: ElementRef});
    readonly modalState = signal<EvoModalState | null>(null);
    readonly showButtons = computed((): string => this.acceptText() || this.declineText());

    readonly closeTargets = EvoModalCloseTargets;

    private readonly destroyRef = inject(DestroyRef);
    private readonly environmentInjector = inject(EnvironmentInjector);
    private readonly evoModalService = inject(EvoModalService);

    ngOnInit(): void {
        this.evoModalService.register(this.id());
        this.subscribeModalEvents();
    }

    ngOnDestroy(): void {
        this.evoModalService.unregister(this.id());
    }

    onAcceptClick(): void {
        const asyncAcceptAction = this.asyncAccept()?.();

        if (!asyncAcceptAction) {
            return this.close(true, EvoModalCloseTargets.BUTTON);
        }

        this.isLoading.set(true);

        asyncAcceptAction.pipe(
            finalize((): void => this.isLoading.set(false)),
            takeUntilDestroyed(this.destroyRef),
        ).subscribe((): void => this.close(true, EvoModalCloseTargets.BUTTON));
    }

    onBackgroundClick(event: Event): void {
        if (this.canCloseByBackground(event)) {
            this.close(false, EvoModalCloseTargets.BACKGROUND);
        }
    }

    onDeclineClick(): void {
        if (this.isLoading()) {
            return;
        }

        this.close(false, EvoModalCloseTargets.BUTTON);
    }

    protected clearView(): void {
        this.modalContainer()?.clear();
    }

    protected insertComponent(
        {data, injector, component}: Pick<EvoDynamicModalParams, 'data' | 'component' | 'injector'>,
        target: InsertionContainerType = 'modal',
    ): void {
        const dynamicComponentRef = createComponent(component, {
            environmentInjector: this.environmentInjector,
            elementInjector: Injector.create({
                providers: [
                    {
                        provide: EVO_MODAL_DATA,
                        useValue: data,
                    },
                ],
                parent: injector,
            }),
        });

        this.getInsertionContainer(target).pipe(
            filter((container): container is ViewContainerRef => !!container),
            takeUntilDestroyed(this.destroyRef),
        ).subscribe((container): void => {
            container.insert(dynamicComponentRef.hostView);
            dynamicComponentRef.changeDetectorRef.markForCheck();
        });
    }

    private canCloseByBackground(event: Event): boolean {
        return (this.declineText() || this.isDynamicContent()) &&
            !this.isLoading() &&
            this.modalState().isOpen &&
            event?.target &&
            !this.modalElement().nativeElement.contains(event.target);
    }

    private close(agreement: boolean, closeTarget: EvoModalCloseTargets): void {
        this.evoModalService.close(this.id(), agreement, {closeTarget});
        this.clearView();

        if (this.id() !== this.evoModalRootId) {
            return;
        }

        this.evoModalService.unregister(this.evoModalRootId);
        this.evoModalService.cleanupDefaultHost();
    }

    private getInsertionContainer(target: InsertionContainerType): Observable<ViewContainerRef> {
        return target === 'modal' ? this.modalContainer$ : this.contentContainer$;
    }

    private initKeyboardListener(): void {
        fromEvent(document.body, 'keydown').pipe(
            takeWhile((): boolean => this.modalState().isOpen),
            filter((event: KeyboardEvent): boolean => (this.declineText() || this.isDynamicContent()) && event.key === 'Escape'),
            takeUntilDestroyed(this.destroyRef),
        ).subscribe((): void => this.close(false, this.closeTargets.ESC));
    }

    private setDrawingStrategy(params: EvoModalCombinedParams): void {
        switch (true) {
            case isDynamicModalParams(params):
                return this.drawingStrategy.set(new EvoDynamicModalDrawingStrategy());
            case isConfiguredComponentModalParams(params):
                return this.drawingStrategy.set(new EvoConfiguredComponentModalDrawingStrategy());
            case isConfiguredTemplateModalParams(params):
                return this.drawingStrategy.set(new EvoConfiguredTemplateModalDrawingStrategy());
            default:
                return;
        }
    }

    private subscribeModalEvents(): void {
        this.evoModalService.getEventsSubscription(this.id()).pipe(
            takeUntilDestroyed(this.destroyRef),
        ).subscribe((modalState: EvoModalState): void => {
            this.modalState.set(modalState);

            if (!modalState.isOpen) {
                return;
            }

            this.initKeyboardListener();
            this.setDrawingStrategy(modalState.params);
            this.drawingStrategy()?.draw.call(this, modalState.params);
        });
    }
}
