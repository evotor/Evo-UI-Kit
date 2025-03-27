import {EvoConfiguredModalDrawingStrategy} from './EvoConfiguredModalDrawingStrategy';
import {EvoConfiguredComponentModalParams} from '../interfaces';
import {EvoModalComponent} from '../evo-modal.component';

export class EvoConfiguredComponentModalDrawingStrategy extends EvoConfiguredModalDrawingStrategy {
    override draw(this: EvoModalComponent, params: EvoConfiguredComponentModalParams<unknown>): void {
        super.draw(params);
        this.insertComponent(params, 'content');
    }
}
