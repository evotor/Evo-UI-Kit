import {
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { EvoModalService } from './evo-modal.service';
import { fromEvent, Observable, Subject, SubscriptionLike } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { Key } from 'ts-keycode-enum';
import { EvoModalState } from './interfaces';
import { evoModalRootId, EVO_MODAL_DATA } from './tokens';
import { Location } from '@angular/common';

export enum EvoModalCloseTargets {
    BACKGROUND = 'background',
    BUTTON = 'button',
    DEFAULT = 'default',
    ESC = 'escape'
}

@Component({
    selector: 'evo-modal',
    templateUrl: './evo-modal.component.html',
    styleUrls: ['./evo-modal.component.scss']
})
export class EvoModalComponent implements OnInit, OnDestroy {
    get id(): string {
        return this._id;
    }

    @ViewChild('modalContentContainer', { read: ViewContainerRef })
    contentContainer: ViewContainerRef;

    @Input() set id(id: string) {
        if (id) {
            this._id = id;
            this.modalService.register(id);
        } else {
            throw new Error('EvoModal. Can\'t be registered, wrong id passed');
        }
    }

    @Input() titleText: string;
    @Input() acceptText: string;
    @Input() acceptButtonColor = 'green';
    @Input() declineText: string;
    @Input() asyncAccept: () => Observable<any>;

    modalState: EvoModalState;
    isAcceptLoading = false;
    isDeclineDisabled = false;
    isVisible = false;
    isDynamicContent = false;

    readonly closeTargets = EvoModalCloseTargets;

    private _id: string;

    private closeTarget: EvoModalCloseTargets = EvoModalCloseTargets.DEFAULT;

    private dynamicComponentRef: ComponentRef<any>;

    private locationSubscription: SubscriptionLike;

    private destroy$ = new Subject();

    constructor(
        private elRef: ElementRef,
        private cdr: ChangeDetectorRef,
        private location: Location,
        private modalService: EvoModalService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit() {
        this.subscribeModalEvents();
    }

    ngOnDestroy() {
        this.clearView();
        this.modalService.unregister(this.id);
        this.locationSubscription?.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }

    onBackgroundClick(event: MouseEvent) {
        if (
            this.declineText &&
            event?.target &&
            this.isClickOutsideModal(event.target) &&
            this.modalState.isOpen
        ) {
            this.handleOnClose(false, this.closeTargets.BACKGROUND);
        }
    }

    handleOnClose(agreement: boolean, closeTarget: EvoModalCloseTargets) {
        this.closeTarget = closeTarget;

        if (agreement === false && this.isDeclineDisabled) {
            return;
        }
        if (agreement && typeof this.asyncAccept === 'function') {
            const setAsyncStates = (isLoading = false) => {
                this.isDeclineDisabled = isLoading;
                this.isAcceptLoading = isLoading;
            };

            setAsyncStates(true);
            return this.asyncAccept().subscribe(
                () => {
                    setAsyncStates(false);
                    this.modalService.close(this.id, agreement, {
                        closeTarget: this.closeTarget
                    });
                },
                () => {
                    setAsyncStates(false);
                }
            );
        }
        this.modalService.close(this.id, agreement, {
            closeTarget: this.closeTarget,
        });
    }

    private isClickOutsideModal(
        target: EventTarget,
    ): boolean {
        return !this.elRef.nativeElement
            .querySelector('.evo-modal')
            .contains(target);
    }

    private subscribeModalEvents() {
        if (!this.id) {
            this.id = evoModalRootId;
        }

        this.modalService
            .getEventsSubscription(this.id).pipe(
                takeUntil(this.destroy$),
                tap((modalState: EvoModalState) => {
                    const { isOpen, params } = modalState;
                    this.modalState = modalState;
                    if (isOpen) {
                        this.initKeyboardListener();
                        this.isDynamicContent = !!params?.component;
                    }
                    // timeout for modal animation support
                    setTimeout(() => {
                        if (this.isDynamicContent) {
                            this.dynamicComponentLogic(modalState);
                        } else {
                            this.isVisible = isOpen;
                        }
                        this.cdr.markForCheck();
                    });
                }),
            )
            .subscribe();
    }

    private dynamicComponentLogic(
        state: EvoModalState,
    ) {
        const { component, data, closeOnNavigation } = state.params;
        if (state.isOpen) {
            this.insertComponent(component, data);
            // Wait for component rendered
            setTimeout(() => {
                this.isVisible = state.isOpen;
            }, 20);
            if (
                !this.locationSubscription &&
                closeOnNavigation !== false
            ) {
                this.closeOnLocationUpdates();
            }
        } else {
            this.modalService.cleanupDefaultHost();
        }
    }

    private initKeyboardListener() {
        return fromEvent(document.body, 'keydown')
            .pipe(
                takeUntil(this.destroy$),
                filter(() => this.modalState.isOpen),
                tap((event: KeyboardEvent) => {
                    if (this.declineText && event.keyCode === Key.Escape) {
                        this.handleOnClose(false, this.closeTargets.ESC);
                    }
                }),
            )
            .subscribe();
    }

    private insertComponent(component: Type<any>, data: any) {
        this.clearView();

        const componentFactory = this.componentFactoryResolver
            .resolveComponentFactory<Component>(component);

        const injector: Injector = Injector.create({
            providers: [
                {
                    provide: EVO_MODAL_DATA,
                    useValue: data
                },
                {
                    provide: EvoModalComponent,
                    useValue: this
                }
            ]
        });

        this.dynamicComponentRef = this.contentContainer.createComponent(
            componentFactory,
            0,
            injector
        );
    }

    private clearView() {
        if (!this.dynamicComponentRef) {
            return;
        }
        this.contentContainer?.clear();
        this.dynamicComponentRef = null;
    }

    private closeOnLocationUpdates() {
        this.locationSubscription = this.location
            .subscribe(() => {
                this.handleOnClose(false, this.closeTargets.DEFAULT);
            });
    }
}
