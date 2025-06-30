import {EvoModalDrawingStrategy} from './EvoModalDrawingStrategy';
import {EvoDynamicModalParams} from '../interfaces';
import {EvoModalComponent} from '../evo-modal.component';

export class EvoDynamicModalDrawingStrategy extends EvoModalDrawingStrategy {
    draw(this: EvoModalComponent, params: EvoDynamicModalParams): void {
        this.isDynamicContent.set(true);
        this.clearView();
        this.insertComponent(params);
    }
}
