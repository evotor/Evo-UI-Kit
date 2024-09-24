import {EvoBaseControl} from './evo-base-control';
import {Directive, Input} from '@angular/core';
import {EvoInputTheme} from './types/evo-input-theme';
import {EvoInputSize} from './types/evo-input-size';

@Directive()
export abstract class EvoBaseInputLikeControl extends EvoBaseControl {
    abstract readonly isFocused: boolean;

    @Input() theme: EvoInputTheme = 'default';
    @Input() size: EvoInputSize = 'normal';
    @Input() suppressError = false;

    get isErrorVisible(): boolean {
        return this.showErrors && !this.suppressError;
    }

    getWrapperClasses(wrapperClass: string = 'wrapper'): string[] {
        const modifiers: string[] = this.getSizeAndThemeModifiers();
        return this.getCssModifiersList(wrapperClass, modifiers);
    }

    getControlContainerClasses(containerClass: string): string[] {
        const modifiers = this.getSizeAndThemeModifiers();

        if (this.control.disabled) {
            modifiers.push('disabled');
        }
        if (this.control.invalid && this.control.touched) {
            modifiers.push('invalid');
        }
        if (this.isFocused) {
            modifiers.push('focused');
        }
        return this.getCssModifiersList(containerClass, modifiers);
    }

    onChange: any = (): void => {};

    onTouched: any = (): void => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private getCssModifiersList(containerClass: string, modifiersList: string[]): string[] {
        return modifiersList.map((modifier) => `${containerClass}_${modifier}`);
    }

    private getSizeAndThemeModifiers(): string[] {
        return [
            `size_${this.size}`, // for prettier
            `theme_${this.theme}`,
        ];
    }
}
