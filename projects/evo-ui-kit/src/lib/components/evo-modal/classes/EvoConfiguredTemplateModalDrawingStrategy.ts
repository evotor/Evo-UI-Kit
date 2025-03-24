import {EvoConfiguredModalDrawingStrategy} from './EvoConfiguredModalDrawingStrategy';
import {EvoConfiguredTemplateModalParams} from '../interfaces';
import {EvoModalComponent} from '../evo-modal.component';

export class EvoConfiguredTemplateModalDrawingStrategy extends EvoConfiguredModalDrawingStrategy {
    override draw(this: EvoModalComponent, params: EvoConfiguredTemplateModalParams<unknown>): void {
        super.draw(params);
        this.modalContent.set({
            template: params.template,
            context: params.data,
        });
    }
}
