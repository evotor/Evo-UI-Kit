import {Meta, moduleMetadata} from '@storybook/angular';
import {
    EvoButtonModule,
    EvoButtonComponent,
    EvoNoteModule,
    EvoIconModule,
} from '../../../projects/evo-ui-kit/src/public_api';
import {icons} from '../../../projects/evo-ui-kit/icons';
import {EvoButtonSize, EvoButtonTheme} from '@evotor-dev/ui-kit';

const deprecationWarning = `
<div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: solid 1px grey">
<evo-note iconSrc="assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Кнопки с селектором <strong>[evo-button]</strong> устарели. Используйте <strong>[evoButton]</strong>. Обращаем внимание, что интерфейсы отличаются, см. <a target="_self" href="?path=/story/components-button--basic">документацию</a></evo-note>
</div>
`;

const EVO_BUTTON_THEMES_LIST: EvoButtonTheme[] = [
    'rounded-solid',
    'rounded-outline',
    'rectangle-outline',
    'semi-rectangle-solid',
];
const EVO_BUTTON_SIZES_LIST: EvoButtonSize[] = ['normal', 'small', 'large'];

export default {
    title: 'components/Button',
    decorators: [
        moduleMetadata({
            imports: [EvoButtonModule, EvoNoteModule, EvoIconModule.forRoot([...icons])],
        }),
    ],
    argTypes: {
        bodyBackground: {
            name: 'Тёмный фон',
            defaultValue: false,
            control: {type: 'boolean'},
        },
        isLoading: {
            name: 'Режим загрузки (параметр loading)',
            defaultValue: false,
            control: {type: 'boolean'},
        },
        isDisabled: {
            name: 'Заблокированный режим (параметр disabled)',
            defaultValue: false,
            control: {type: 'boolean'},
        },
        color: {
            name: 'Цвет (параметр color)',
            options: ['success', 'secondary', 'bonus', 'link', 'error', 'white', 'primary', 'text'],
            defaultValue: 'success',
            control: {type: 'radio'},
        },
    },
} as Meta<EvoButtonComponent>;

export const Basic = (args) => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    props: {
        ...args,
        EVO_BUTTON_SIZES_LIST: EVO_BUTTON_SIZES_LIST,
        EVO_BUTTON_THEMES_LIST: EVO_BUTTON_THEMES_LIST,
    },
    template: `
    <style>
        .wrapper {
            display:grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .wrapper .section {
            margin-top: 0;
        }
        .table-cell {
            padding: 16px;
            text-align: left;
        }
        .table-cell:nth-child(even) {
            background: none;
        }
        .table-cell__content {
            display:flex;
            flex-direction: row;
            gap: 16px;
            flex-wrap: wrap;
        }
        .table_no-zebra td,
        .table_no-zebra th,
        .table_no-zebra tr {
            background: none;
        }
        .bg-dark {
            background: #212121;
            color: #fff;
        }
        h5 {
            margin-bottom: 16px;
        }
    </style>


    <evo-note type="info" style="display: block; margin-bottom: 32px;">
        <p class="evo-text-header evo-text-header_h4">Внимание:</p>
        <p>В текущей версии UI-кита существует две версии компонента кнопки: «старая» и «новая». Интерфейсы версий компонентов значительно отличаются, поэтому мы сохранили оба варианта.</p>
        <p>«Новые» кнопки отличаются от «старых» селектором: используйте <strong>button[evoButton]</strong> вместо <strong>button[evo-button]</strong>.</p>
        <p>В следующих мажорных версиях «старая» версия кнопок будет устранена, поэтому рекомендуется постепенно переводить проект на использование «новых» кнопок.</p>
    </evo-note>

    <div [class.bg-dark]="bodyBackground">
        <div class="wrapper">
            <div class="section">
                <h4 class="section__title">button[evoButton]</h4>

                <div class="subsection">
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" [color]="color">Кнопка по умолчанию</button>
                </div>
            </div>
            <div class="section">
                <h4 class="section__title">a[evoButton]</h4>

                <div class="subsection">
                    <a href="javascript:void(0)" evoButton [disabled]="isDisabled" [loading]="isLoading" [color]="color">Кнопка на ссылке</a>
                </div>
            </div>
        </div>

        <div class="section">
            <h4 class="section__title">Размеры и темы</h4>
            <p class="evo-text-caption evo-text-caption_c1">Параметры <code>size</code> и <code>theme</code>, соответственно.</p>

            <table class="table table_no-zebra">
                <tr class="table__row table__row_head">
                    <th class="table-cell table-cell_head">Тема / Размер</th>
                    <th *ngFor="let size of EVO_BUTTON_SIZES_LIST" class="table-cell table-cell_head">{{ size }}</th>
                </tr>
                <ng-container *ngFor="let theme of EVO_BUTTON_THEMES_LIST">
                    <tr class="table__row">
                        <th class="table-cell table-cell_head">{{ theme }}</th>
                        <td class="table-cell" *ngFor="let size of EVO_BUTTON_SIZES_LIST">
                            <div class="table-cell__content">
                                <button evoButton [disabled]="isDisabled" [loading]="isLoading" [color]="color" [theme]="theme" [size]="size">{{ theme }} / {{ size }}</button>
                                &nbsp;
                                <button evoButton [disabled]="isDisabled" [loading]="isLoading" [color]="color" [theme]="theme" [size]="size">
                                    <evo-icon shape="expand-more"></evo-icon>
                                </button>
                                
                                 <button evoButton [disabled]="isDisabled" [loading]="isLoading" [color]="color" [theme]="theme" [size]="size">
                                    <span style="display: flex; align-items: center;">
                                        <evo-icon shape="expand-more" style="width: 24px; height: 24px; flex: 0 0 24px"></evo-icon>
                                        Войти по СберБизнес ID
                                    </span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </ng-container>
            </table>
        </div>
    </div>
`,
});

Basic.storyName = 'basic';

export const Customization = (args) => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    props: {
        ...args,
        EVO_BUTTON_SIZES_LIST: EVO_BUTTON_SIZES_LIST,
        EVO_BUTTON_THEMES_LIST: EVO_BUTTON_THEMES_LIST,
    },
    template: `
        <div class="section">
            <h4 class="section__title">CSS-кастомизация SOLID-кнопок</h4>

            <p class="mb-medium">Используйте <code>color="custom"</code> для того, чтобы следующие переменные имели силу</p>

            <div class="subsection">
                <h5 class="evo-text-header_h5">Заливка цветом, кастомная тень ховера</h5>

                <code class="code code_block code_size-small mb-medium">
                    --evo-button-background-color: #ED2EAC;<br>
                    --evo-button-border-color: transparent;<br>
                    --evo-button-text-color: white;<br>
                    --evo-button-hover-text-color: white;<br>
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;<br>
                    --evo-button-overflow: hidden;
                </code>

                <div>
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" color="custom" style="
                    --evo-button-background-color: #ED2EAC;
                    --evo-button-border-color: transparent;
                    --evo-button-text-color: white;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;
                    --evo-button-overflow: hidden;">Кнопка</button>
                    &nbsp;
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" theme="semi-rectangle-solid" color="custom" style="
                    --evo-button-background-color: #ED2EAC;
                    --evo-button-border-color: transparent;
                    --evo-button-text-color: white;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;
                    --evo-button-overflow: hidden;">Кнопка</button>
                </div>
            </div>
            <div class="subsection">
                <h5 class="evo-text-header_h5">Градиентная заливка, кастомная тень ховера</h5>

                <code class="code code_block code_size-small mb-medium">
                    --evo-button-background-gradient: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%);<br>
                    --evo-button-border-color: transparent;<br>
                    --evo-button-text-color: white;<br>
                    --evo-button-hover-text-color: white;<br>
                    --evo-button-hover-shadow: 3px 3px 10px #e66465;<br>
                    --evo-button-overflow: hidden;
                </code>

                <div>
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" color="custom" style="
                    --evo-button-background-gradient: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%);
                    --evo-button-border-color: transparent;
                    --evo-button-text-color: white;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #e66465;
                    --evo-button-overflow: hidden;">Кнопка</button>
                    &nbsp;
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" theme="semi-rectangle-solid" color="custom" style="
                    --evo-button-background-gradient: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%);
                    --evo-button-border-color: transparent;
                    --evo-button-text-color: white;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #e66465;
                    --evo-button-overflow: hidden;">Кнопка</button>
                </div>
            </div>

        </div>

        <div class="section">
            <h4 class="section__title">CSS-кастомизация OUTLINE-кнопок</h4>

            <p class="mb-medium">Используйте <code>color="custom"</code> для того, чтобы следующие переменные имели силу</p>

            <div class="subsection">

                <h5 class="evo-text-header_h5">Кастомный цвет рамки и заливка ховера цветом, кастомная тень ховера</h5>
                <code class="code code_block code_size-small mb-medium">
                    --evo-button-background-color: #ED2EAC;<br>
                    --evo-button-border-color: #ED2EAC;<br>
                    --evo-button-text-color: #ED2EAC;<br>
                    --evo-button-hover-text-color: #ED2EAC;<br>
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;<br>
                    --evo-button-overflow: hidden;
                </code>

                <div>
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" theme="rounded-outline" color="custom" style="
                    --evo-button-background-color: #ED2EAC;
                    --evo-button-border-color: #ED2EAC;
                    --evo-button-text-color: #ED2EAC;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;
                    --evo-button-overflow: hidden;">Кнопка</button>
                    &nbsp;
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" theme="rectangle-outline" color="custom" style="
                    --evo-button-background-color: #ED2EAC;
                    --evo-button-border-color: #ED2EAC;
                    --evo-button-text-color: #ED2EAC;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;
                    --evo-button-overflow: hidden;">Кнопка</button>
                </div>
            </div>
            <div class="subsection">
                <h5 class="evo-text-header_h5">Кастомный цвет рамки и градиентная заливка ховера, кастомная тень ховера</h5>

                <code class="code code_block code_size-small mb-medium">
                    --evo-button-background-gradient: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%);<br>
                    --evo-button-border-color: #ED2EAC;<br>
                    --evo-button-text-color: #ED2EAC;<br>
                    --evo-button-hover-text-color: #ED2EAC;<br>
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;<br>
                    --evo-button-overflow: hidden;
                </code>

                <div>
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" theme="rounded-outline" color="custom" style="
                    --evo-button-background-gradient: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%);
                    --evo-button-border-color: #ED2EAC;
                    --evo-button-text-color: #ED2EAC;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;
                    --evo-button-overflow: hidden;">Кнопка</button>
                    &nbsp;
                    <button evoButton [disabled]="isDisabled" [loading]="isLoading" theme="rectangle-outline" color="custom" style="
                    --evo-button-background-gradient: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%);
                    --evo-button-border-color: #ED2EAC;
                    --evo-button-text-color: #ED2EAC;
                    --evo-button-hover-text-color: white;
                    --evo-button-hover-shadow: 3px 3px 10px #ED2EAC;
                    --evo-button-overflow: hidden;">Кнопка</button>
                </div>
            </div>
        </div>
`,
});

Customization.storyName = 'customization';

export const WithSize = () => ({
    template: `
        ${deprecationWarning}

        <div *ngFor="let size of sizes;">
        <p><evo-button [size]="size">Нажми меня</evo-button></p>
        </div>
        `,
    props: {
        sizes: ['small', 'large'],
    },
});

WithSize.storyName = 'with size';

export const WithColor = () => ({
    template: `
        ${deprecationWarning}

        <div *ngFor="let color of colors;" [ngStyle]="{'background-color': color === 'white' ? '#403C3D' : none}">
        <p><evo-button [color]="color">Нажми меня</evo-button></p>
        </div>
        `,
    props: {
        colors: ['lined', 'darkblue-lined', 'green', 'green-lined', 'purple', 'white', 'red', 'darkblue'],
    },
});

WithColor.storyName = 'with color';

export const WithState = () => ({
    template: `
        ${deprecationWarning}

        <div *ngFor="let color of colors;" style="padding: 10px 20px; background: #ccc;display: flex; align-items: center;">
            <span style="display: inline-block; width: 110px;">{{ color }}:</span>
            <evo-button [color]="color" style="margin-right: 20px;">Нажми меня</evo-button>
            <evo-button [color]="color" [disabled]="true" style="margin-right: 20px;">Нажми меня</evo-button>
            <evo-button [color]="color" [loading]="true" style="margin-right: 20px;">Нажми меня</evo-button>
        </div>
        `,
    props: {
        colors: ['green', 'green-lined', 'primary', 'lined', 'darkblue-lined', 'purple', 'red', 'white', 'darkblue'],
    },
});

WithState.storyName = 'with state';
