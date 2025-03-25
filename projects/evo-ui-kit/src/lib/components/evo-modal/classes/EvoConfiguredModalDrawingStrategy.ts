import {EvoModalDrawingStrategy} from './EvoModalDrawingStrategy';
import {EvoConfiguredModalParams} from '../interfaces';
import {EvoModalComponent} from '../evo-modal.component';

export abstract class EvoConfiguredModalDrawingStrategy extends EvoModalDrawingStrategy {
    draw(this: EvoModalComponent, params: EvoConfiguredModalParams): void {
        this.titleText.set(params.titleText);
        this.acceptText.set(params.acceptText);
        this.declineText.set(params.declineText);
        this.acceptButtonColor.update((color) => params.acceptButtonColor || color);
        this.acceptButtonTheme.update((theme) => params.acceptButtonTheme || theme);
        this.declineButtonColor.update((color) => params.acceptButtonColor || color);
        this.declineButtonTheme.update((theme) => params.acceptButtonTheme || theme);
        this.asyncAccept.set(params.asyncAccept);
    }
}
