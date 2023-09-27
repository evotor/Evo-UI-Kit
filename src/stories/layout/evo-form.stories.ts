import {moduleMetadata} from '@storybook/angular';
import {
    EvoButtonModule,
    EvoControlErrorModule,
    EvoControlLabelModule,
    EvoIconModule,
    EvoInputModule,
    EvoPopoverModule,
    EvoUiKitModule,
} from '@evo/ui-kit';
import {iconHelp} from '@evo/ui-kit/icons/system';

export default {
    title: 'Layout/evo-form',

    decorators: [
        moduleMetadata({
            imports: [
                EvoUiKitModule,
                EvoControlLabelModule,
                EvoControlErrorModule,
                EvoInputModule,
                EvoPopoverModule,
                EvoButtonModule,
                EvoIconModule.forChild([
                    {
                        name: 'icons',
                        shapes: {
                            help: iconHelp,
                        },
                    },
                ]),
            ],
        }),
    ],
};

export const Example1Acquiring = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <div class="evo-form">
        <div class="evo-form-section">
            <h2 class="evo-form-section__title">Магазин</h2>
            <div class="evo-form-row">
                <evo-control-label
                    class="evo-form-col evo-form-col_size-3"
                    [label]="labelTemplate"
                    [context]="{label: 'Магазины', popoverText: 'Подсказочка'}"
                >
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Название компании">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Сайт">
                    <evo-input></evo-input>
                    <div class="evo-form__note">Необязательное поле</div>
                </evo-control-label>
            </div>
        </div>
        <div class="evo-form-section">
            <h2 class="evo-form-section__title">Клиент</h2>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Фамилия">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Имя">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Отчество">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Телефон">
                    <evo-input></evo-input>
                </evo-control-label>
                <div class="evo-form-col evo-form-col_size-6">
                    <div class="evo-form-col evo-form-col_multi">
                        <evo-control-label class="evo-form-col evo-form-col_size-3" label="Электронная почта">
                            <evo-input></evo-input>
                        </evo-control-label>
                        <evo-control-label class="evo-form-col evo-form-col_size-3" label="Повторите электронную почту">
                            <evo-input></evo-input>
                        </evo-control-label>
                    </div>
                    <div class="evo-form__note">На указанную почту будут отправлены данные для работы c системой Goods
                    </div>
                </div>
            </div>
        </div>
        <div class="evo-form-section">
            <div class="evo-form-section__title">Организация</div>

            <div class="evo-form-row">
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="Название организации"
                >
                    <div class="evo-form-col__static-value text-nowrap">ИП Иванов Иван Иванович</div>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="ОГРН/ОГРНИП">
                    <div class="evo-form-col__static-value">1177746126040</div>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="КПП">
                    <div class="evo-form-col__static-value">50720001</div>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="Код ИФНС">
                    <div class="evo-form-col__static-value">5072</div>
                </evo-control-label>
            </div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Система налогообложения">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
        </div>

        <div class="evo-form-section">
            <div class="evo-form-section__title">Банк</div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Корреспондентский счёт">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Расчётный счёт">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Коды ОКВЭД (через запятую)">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
        </div>

        <div class="evo-form-section">
            <div class="evo-form-section__title">Местоположение</div>
            <div class="evo-form-section__subtitle">Юридический адрес</div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Страна">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Регион">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Улица (переулок, проспект и пр.)">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-2" label="Индекс">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Район">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Город или населенный пункт">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-1" label="Дом">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="Корпус или строение"
                >
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="Помещение в здании">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-1" label="Номер">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>

            <div class="evo-form-section__subtitle">Фактический адрес (поля адреса в два отдельных ряда)</div>
            <div class="evo-form-row">
                <div class="evo-form-col">
                    <evo-checkbox [(ngModel)]="check3">Совпадает с юридическим</evo-checkbox>
                </div>
            </div>
            <ng-container *ngIf="!check3">
                <div class="evo-form-row">
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Страна">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Регион">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label
                        class="evo-form-col evo-form-col_size-3"
                        label="Улица (переулок, проспект и пр.)"
                    >
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-2" label="Индекс">
                        <evo-input></evo-input>
                    </evo-control-label>
                </div>
                <div class="evo-form-row">
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Район">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Город или населенный пункт">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-1" label="Дом">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label
                        class="evo-form-col evo-form-col_size-shrink text-nowrap"
                        label="Корпус или строение"
                    >
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label
                        class="evo-form-col evo-form-col_size-shrink text-nowrap"
                        label="Помещение в здании"
                    >
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-1" label="Номер">
                        <evo-input></evo-input>
                    </evo-control-label>
                </div>
            </ng-container>
        </div>
        <div class="evo-form-section evo-form-section_actions">
            <div class="evo-form-row">
                <evo-button class="evo-form__button" color="green">Сохранить</evo-button>
                <evo-button class="evo-form__button" color="darkblue-lined">Отменить</evo-button>
                <evo-button class="evo-form__button evo-form__button_end" color="red">Удалить</evo-button>
            </div>
            <div class="evo-form-row">
                <p class="evo-form__note">
                    Нажимая на кнопку «Продолжить», вы соглашаетесь с политикой обработки персональных данных
                </p>
            </div>
        </div>
    </div>
</div>
        `,
});

Example1Acquiring.storyName = 'example 1 (acquiring)';

export const Example2Goods = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <h1 class="evo-title evo-title_h1">Регистрация в системе goods</h1>
    <div class="evo-form">
        <div class="evo-form-section">
            <h2 class="evo-form-section__title">Магазин</h2>
            <div class="evo-form-row">
                <evo-control-label
                    class="evo-form-col evo-form-col_size-3"
                    [label]="labelTemplate"
                    [context]="{label: 'Магазины', popoverText: 'Подсказочка'}"
                >
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Название компании">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Сайт">
                    <evo-input></evo-input>
                    <div class="evo-form__note">Необязательное поле</div>
                </evo-control-label>
            </div>
        </div>
        <div class="evo-form-section">
            <h2 class="evo-form-section__title">Клиент</h2>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Фамилия">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Имя">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Отчество">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Телефон">
                    <evo-input></evo-input>
                </evo-control-label>
                <div class="evo-form-col evo-form-col_size-6">
                    <div class="evo-form-col evo-form-col_multi">
                        <evo-control-label class="evo-form-col evo-form-col_size-3" label="Электронная почта">
                            <evo-input></evo-input>
                        </evo-control-label>
                        <evo-control-label class="evo-form-col evo-form-col_size-3" label="Повторите электронную почту">
                            <evo-input></evo-input>
                        </evo-control-label>
                    </div>
                    <div class="evo-form__note">На указанную почту будут отправлены данные для работы c системой Goods
                    </div>
                </div>
            </div>
        </div>
        <div class="evo-form-section">
            <div class="evo-form-section__title">Организация</div>

            <div class="evo-form-row">
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="Название организации"
                >
                    <div class="evo-form-col__static-value text-nowrap">ИП Иванов Иван Иванович</div>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="ОГРН/ОГРНИП">
                    <div class="evo-form-col__static-value">1177746126040</div>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="КПП">
                    <div class="evo-form-col__static-value">50720001</div>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="Код ИФНС">
                    <div class="evo-form-col__static-value">5072</div>
                </evo-control-label>
            </div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Система налогообложения">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
        </div>

        <div class="evo-form-section">
            <div class="evo-form-section__title">Банк</div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Корреспондентский счёт">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Расчётный счёт">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Коды ОКВЭД (через запятую)">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
        </div>

        <div class="evo-form-section">
            <div class="evo-form-section__title">Местоположение</div>
            <div class="evo-form-section__subtitle">Юридический адрес</div>

            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Страна">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Регион">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Улица (переулок, проспект и пр.)">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-2" label="Индекс">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Район">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="Город или населенный пункт">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-1" label="Дом">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="Корпус или строение"
                >
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="Помещение в здании">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-1" label="Номер">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>

            <div class="evo-form-section__subtitle">Фактический адрес (поля адреса в два отдельных ряда)</div>
            <div class="evo-form-row">
                <div class="evo-form-col">
                    <evo-checkbox [(ngModel)]="check3">Совпадает с юридическим</evo-checkbox>
                </div>
            </div>
            <ng-container *ngIf="!check3">
                <div class="evo-form-row">
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Страна">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Регион">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label
                        class="evo-form-col evo-form-col_size-3"
                        label="Улица (переулок, проспект и пр.)"
                    >
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-2" label="Индекс">
                        <evo-input></evo-input>
                    </evo-control-label>
                </div>
                <div class="evo-form-row">
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Район">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-3" label="Город или населенный пункт">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-1" label="Дом">
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label
                        class="evo-form-col evo-form-col_size-shrink text-nowrap"
                        label="Корпус или строение"
                    >
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label
                        class="evo-form-col evo-form-col_size-shrink text-nowrap"
                        label="Помещение в здании"
                    >
                        <evo-input></evo-input>
                    </evo-control-label>
                    <evo-control-label class="evo-form-col evo-form-col_size-1" label="Номер">
                        <evo-input></evo-input>
                    </evo-control-label>
                </div>
            </ng-container>
        </div>
        <div class="evo-form-section evo-form-section_actions">
            <div class="evo-form-row">
                <evo-button class="evo-form__button" color="green">Сохранить</evo-button>
                <evo-button class="evo-form__button" color="darkblue-lined">Отменить</evo-button>
                <evo-button class="evo-form__button evo-form__button_end" color="red">Удалить</evo-button>
            </div>
            <div class="evo-form-row">
                <p class="evo-form__note">
                    Нажимая на кнопку «Продолжить», вы соглашаетесь с политикой обработки персональных данных
                </p>
            </div>
        </div>
    </div>
</div>
<ng-template #labelTemplate let-label="label" let-popoverText="popoverText">
    {{ label }}
    <evo-popover class="evo-form-popover">
        <evo-icon shape="help"></evo-icon>
        <p popover-body>{{ popoverText }}</p>
    </evo-popover>
</ng-template>
        `,
});

Example2Goods.storyName = 'example 2 (goods)';

export const Example3Demo = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
<div class="story-container">
    <h1 class="evo-title evo-title_h1">Демо</h1>
    <div class="evo-form">
        <div class="evo-form-section">
            <h2 class="evo-form-section__title">evo-form-section__title</h2>
            <h2 class="evo-form-section__subtitle">evo-form-section__subtitle</h2>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-1" label="size-1">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-grow" label="size-grow">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-2" label="size-2">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-8" label="size-8">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-3" label="size-3">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-7" label="size-7">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-4" label="size-4">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-6" label="size-6">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label class="evo-form-col evo-form-col_size-5" label="size-5">
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-5" label="size-5">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="size-shrink — равняется по размеру лэйбла или контента"
                >
                    <evo-input></evo-input>
                </evo-control-label>
                <evo-control-label class="evo-form-col evo-form-col_size-shrink text-nowrap" label="size-shrink">
                    <evo-input></evo-input>
                </evo-control-label>
            </div>
            <div class="evo-form-row">
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="evo-form__static-value"
                >
                    <div class="evo-form__static-value text-nowrap">Статичное значение формы</div>
                </evo-control-label>
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="evo-form__static-value"
                >
                    <div class="evo-form__static-value text-nowrap">Значение</div>
                </evo-control-label>
                <evo-control-label
                    class="evo-form-col evo-form-col_size-shrink text-nowrap"
                    label="evo-form__static-value"
                >
                    <div class="evo-form__static-value text-nowrap">формы</div>
                </evo-control-label>
            </div>
        </div>
    </div>
</div>
        `,
});

Example3Demo.storyName = 'example 3 (demo)';
