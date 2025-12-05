import {CommonModule, registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {EvoIconModule} from '../evo-icon';
import {EvoUiKitModule} from '../../evo-ui-kit.module';
import {EvoQuantityComponent} from './evo-quantity.component';
import {iconMinus, iconDelete, iconPlus, iconCheckRounded} from '@evotor-dev/ui-kit/icons/system';

registerLocaleData(localeRu, 'ru');

@NgModule({
    declarations: [EvoQuantityComponent],
    exports: [EvoQuantityComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EvoIconModule.forRoot([
            {
                name: 'system',
                shapes: {
                    minus: iconMinus,
                    plus: iconPlus,
                    delete: iconDelete,
                    'check-rounded': iconCheckRounded,
                },
            },
        ]),
        EvoUiKitModule,
    ],
})
export class EvoQuantityModule {}
