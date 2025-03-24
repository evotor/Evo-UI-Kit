import {EvoModalCombinedParams} from '../interfaces';
import {EvoModalComponent} from '../evo-modal.component';

export abstract class EvoModalDrawingStrategy {
    abstract draw(this: EvoModalComponent, params: EvoModalCombinedParams): void;
}
