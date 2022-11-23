import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EvoBaseControl } from '../../common/evo-base-control';
import { EvoControlStates } from '../../common/evo-control-state-manager/evo-control-states.enum';
import { clearMultiline } from './utils/clear-multiline';

@Component({
    selector: 'evo-input-contenteditable',
    templateUrl: './evo-input-contenteditable.component.html',
    styleUrls: ['./evo-input-contenteditable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EvoInputContenteditableComponent),
            multi: true,
        },
        {
            provide: EvoBaseControl,
            useExisting: forwardRef(() => EvoInputContenteditableComponent),
            multi: true,
        },
    ],
})
export class EvoInputContenteditableComponent extends EvoBaseControl implements OnInit, ControlValueAccessor {

    static readonly STYLE_KEYCODES = [
        66, // B b
        73, // I i
        85, // U u
    ];

    @ViewChild('contenteditable', {read: ElementRef, static: true}) readonly contenteditable: ElementRef;

    @Output() blur = new EventEmitter<FocusEvent>();

    @Input() multiline = true;
    @Input() placeholder: string;
    @Input() autoFocus: boolean;
    @Input() maxLines = 3;
    @Input() minLines = 0;

    @Input() private readonly disabled = false;
    @Input() private readonly preventStylingHotkeys = true;

    private onChange: Function;
    private onTouched: Function;
    private _isDisabled = false;


    constructor(
        private readonly cd: ChangeDetectorRef,
        protected readonly injector: Injector,
    ) {
        super(injector);
    }

    get isDisabled(): boolean {
        return this._isDisabled || this.disabled;
    }

    get inputClass(): { [cssClass: string]: boolean } {
        return {
            open: this.minLines > 0,
            single: !this.multiline,
            disabled: this._isDisabled,
            valid: this.currentState[EvoControlStates.valid],
            invalid: this.currentState[EvoControlStates.invalid],
        };
    }

    ngOnInit(): void {
        this.wrapSetValue();

        if (this.autoFocus) {
            this.focus();
        }
    }

    focus(): void {
        this.contenteditable.nativeElement.focus();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    writeValue(value: string): void {
        this.contenteditable.nativeElement.innerText = this.clearMultiline(value);
    }

    onBlur(event: FocusEvent): void {
        this.blur.emit(event);
    }

    /**
     * New line triggers changes in both modes
     * Handle this case here if you found this behaviour redundant
     */
    onInput(event: Event): void {
        if (this.onTouched) { this.onTouched(); }

        if (this.onChange) {
            const value = ((event as InputEvent).target as HTMLElement).innerText;
            this.onChange(this.clearMultiline(value));
        }
    }

    onPaste(event: ClipboardEvent): void {
        event.preventDefault();
        const content = event.clipboardData?.getData('text/plain');
        document.execCommand('insertText', false, this.clearMultiline(content));
    }

    onKeydown(event: KeyboardEvent): void {
        if (
            this.preventStylingHotkeys &&
            (event.ctrlKey || event.metaKey) &&
            EvoInputContenteditableComponent.STYLE_KEYCODES.includes(event.keyCode)
        ) {
            event.preventDefault();
        }
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this._isDisabled = isDisabled;
        this.cd.detectChanges();
    }

    private clearMultiline(value: string): string {
        return clearMultiline(value, this.multiline);
    }

    private wrapSetValue() {
        const originalSetValue = this.control.setValue;

        this.control.setValue = (value: unknown, options?: Object) => {
            if (typeof value === 'string') {
                value = this.clearMultiline(value);
            }
            return originalSetValue.call(this.control, value, options);
        };
    }
}
