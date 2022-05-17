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

    @ViewChild('contenteditable', {read: ElementRef, static: true}) readonly contenteditable: ElementRef;

    @Output() blur = new EventEmitter<FocusEvent>();

    @Input() multiline = true;
    @Input() placeholder: string;
    @Input() autoFocus: boolean;
    @Input() maxLines = 3;
    @Input() minLines = 0;

    @Input() private disabled = false;
    @Input() private preventStylingHotkeys = true;

    private onChange: Function;
    private onTouched: Function;
    private _isDisabled = false;

    private readonly STYLE_KEYCODES = [
        66, // B b
        73, // I i
        85, // U u
    ];

    constructor(
        private cd: ChangeDetectorRef,
        protected injector: Injector,
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

    ngOnInit() {
        this.wrapSetValue();

        if (this.autoFocus) {
            this.focus();
        }
    }

    focus() {
        this.contenteditable.nativeElement.focus();
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    writeValue(value: string) {
        this.contenteditable.nativeElement.innerText = this.clearMultiline(value);
    }

    onBlur(event: FocusEvent) {
        this.blur.emit(event);
    }

    /**
     * New line triggers changes in both modes
     * Handle this case here if you found this behaviour redundant
     */
    onInput(event: Event) {
        if (this.onTouched) { this.onTouched(); }

        if (this.onChange) {
            const value = ((event as InputEvent).target as HTMLElement).innerText;
            this.onChange(this.clearMultiline(value));
        }
    }

    onPaste(event: ClipboardEvent) {
        event.preventDefault();
        const content = event.clipboardData?.getData('text/plain');
        document.execCommand('insertText', false, this.clearMultiline(content));
    }

    onKeydown(event: KeyboardEvent) {
        if (
            this.preventStylingHotkeys &&
            (event.ctrlKey || event.metaKey) &&
            this.STYLE_KEYCODES.includes(event.keyCode)
        ) {
            event.preventDefault();
        }
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this._isDisabled = isDisabled;
        this.cd.detectChanges();
    }

    private clearMultiline(value: string) {
        if (typeof value === 'string') {
            value = this.multiline ? value : value?.replace(/\n/g, '');
        }

        return value;
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
