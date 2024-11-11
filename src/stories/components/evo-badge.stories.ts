import {moduleMetadata} from '@storybook/angular';
import {EvoBadgeModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-badge';
import {EvoButtonModule, EvoIconModule, EvoPipesModule} from '@evotor-dev/ui-kit';
import {iconStarOutlined} from '@evotor-dev/ui-kit/icons/system';
import {EvoNoteModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-note';

export default {
    title: 'Components/Badge',

    decorators: [
        moduleMetadata({
            imports: [
                EvoBadgeModule,
                EvoButtonModule,
                EvoNoteModule,
                EvoPipesModule,
                EvoIconModule.forRoot([
                    {
                        name: 'icons',
                        shapes: {
                            starOutlined: iconStarOutlined,
                        },
                    },
                ]),
            ],
        }),
    ],
    argTypes: {
        text: {
            name: 'Текст (span innerHTML)',
            defaultValue: 'Бейдж',
            control: {type: 'text'},
        },
        hasPrefixIcon: {
            name: 'Есть префиксная иконка',
            defaultValue: false,
            control: {type: 'boolean'},
        },
        hasPostfixIcon: {
            name: 'Есть префиксная иконка',
            defaultValue: false,
            control: {type: 'boolean'},
        },
        size: {
            name: 'Размер (параметр color)',
            options: ['small', 'normal', 'large'],
            defaultValue: 'normal',
            control: {type: 'radio'},
        },
        color: {
            name: 'Цвет (параметр color)',
            options: [
                'default (empty)',
                'success',
                'error',
                'icon-dark',
                'graph-1',
                'graph-2',
                'graph-3',
                'graph-4',
                'graph-5',
                'graph-6',
                'graph-7',
                'graph-8',
                'graph-9',
                'graph-10',
                'grey',
                'primary',
                'custom',
            ],
            defaultValue: 'success',
            control: {type: 'radio'},
        },
        customColor: {
            name: '--evo-badge-color (только для цвета CUSTOM)',
            defaultValue: '#212121',
            control: {type: 'text'},
        },
        customBackgroundImage: {
            name: '--evo-badge-background-image (только для цвета CUSTOM)',
            defaultValue: 'linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%)',
            control: {type: 'text'},
        },
        customBackgroundColor: {
            name: '--evo-badge-background-color (только для цвета CUSTOM)',
            defaultValue: '',
            control: {type: 'text'},
        },
        fixedWidthPx: {
            name: 'Фиксированная ширина в пикселях, например, 200px (deprecated)',
            defaultValue: false,
            control: {type: 'boolean'},
        },
        fixedWidthPercent: {
            name: 'Фиксированная ширина в процентах, например, 50% (deprecated)',
            defaultValue: false,
            control: {type: 'boolean'},
        },
    },
};

export const Basic = (args) => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <div class="section">
            <h4 class="section__title">evo-badge</h4>
            <div class="subsection">
                <evo-badge
                    [color]="color"
                    [attr.data-color]="color"
                    [size]="size"
                    [width.px]="fixedWidthPx ? 200 : null"
                    [width.%]="fixedWidthPercent ? 50 : null"
                    [style.--evo-badge-color]="customColor"
                    [style.--evo-badge-background-color]="customBackgroundColor"
                    [style.--evo-badge-background-image]="customBackgroundImage"
                >
                    <evo-icon shape="starOutlined" *ngIf="hasPrefixIcon"></evo-icon>
                    <span *ngIf="text" [innerHTML]="text | safeHtml"></span>
                    <evo-icon shape="starOutlined" *ngIf="hasPostfixIcon"></evo-icon>
                </evo-badge>
            </div>
            <div class="subsection">
                <h5 class="evo-text-header_h5">Замечания</h5>
                <p>Компонент был существенно переработан для версий библиотеки, выше 6.9.8, 7.4.6, 8.2.0. Изменения, возможно, могут показаться частично ломающими, но с сохранением базовой функциональности, соответствующей требованиям дизайна.</p>
                <p class="mb-medium"><strong>Рекомендуется проверить места использования компонента при обновлении версии библиотеки.</strong></p>
                <evo-note type="info" class="mb-medium" style="display:block;">
                    <p class="mb-medium">Добавлена поддержка <code>evo-icon</code>:</p>
                    <ul style="padding-left: 2em;" class="mb-medium">
                        <li style="list-style: disc">Размеры иконок зависят от размера бейджа (параметра <code>size</code>).</li>
                        <li style="list-style: disc">Иконка по умолчанию имеет отрицательные боковые отступы, чтобы соответствовать дизайну.</li>
                        <li style="list-style: disc">Цвет иконки зависит от цвета текста бейджа.</li>
                    </ul>
                    <p><strong>При необходимости</strong> можно перекрыть эти свойства в месте применения, поскольку инкапсуляция стилей компонента была отключена.</p>
                </evo-note>
                <evo-note type="warning" class="mb-medium" style="display:block;">
                    <p>Параметр <code>[multiline]</code> утратил свою функциональность (сброс <code>white-space</code> и <code>word-break</code>.</p>
                    <p class="mb-medium"><strong>При необходимости</strong> этого поведения можно добиться, например, оформлением проецируемого содержимого в родительском компоненте:</p>
                    <evo-badge
                        style="margin: 0 auto;"
                        [color]="color"
                        [attr.data-color]="color"
                        [size]="size"
                        [width.px]="fixedWidthPx ? 200 : null"
                        [width.%]="fixedWidthPercent ? 50 : null"
                        [style.--evo-badge-color]="customColor"
                        [style.--evo-badge-background-color]="customBackgroundColor"
                        [style.--evo-badge-background-image]="customBackgroundImage"
                    >
                        <ol>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ol>
                    </evo-badge>
                </evo-note>

                <evo-note type="warning">
                    <p>Управление шириной бейджа через параметры <code>[width.px]</code> и <code>[width.%]</code> считается устаревшим.</p>

                    <p>Рекомендуется перестать использовать эти параметры, поскольку они будут удалены.</p>

                    <p>Компонент <code>evo-badge</code> по умолчанию имеет на хосте следующие свойства:</p>
                    <code class="code code_block code_size-small mb-medium">
                        display: block;<br>
                        width: max-content
                    </code>
                    <p class="mb-medium">Соответственно, можно изменять размер бейджа из родительского компонента:</p>

                    <code class="code code_block code_size-small mb-medium">
                        evo-badge &#x7B;
                          width: 80%;
                        &#x7D;
                    </code>

                    <evo-badge
                        style="margin: 0 auto;width: 80%;"
                        [color]="color"
                        [attr.data-color]="color"
                        [size]="size"
                        [width.px]="fixedWidthPx ? 200 : null"
                        [width.%]="fixedWidthPercent ? 50 : null"
                        [style.--evo-badge-color]="customColor"
                        [style.--evo-badge-background-color]="customBackgroundColor"
                        [style.--evo-badge-background-image]="customBackgroundImage"
                    >
                        <evo-icon shape="starOutlined" *ngIf="hasPrefixIcon"></evo-icon>
                        Бейдж шириной 80%
                        <evo-icon shape="starOutlined" *ngIf="hasPostfixIcon"></evo-icon>
                    </evo-badge>
                </evo-note>
            </div>
        </div>
        `,
    props: {
        ...args,
    },
});

Basic.storyName = 'basic';

export const Custom = (args) => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <div class="section">
            <h2 class="section__title">CSS-кастомизация бейджей</h2>

            <h5 class="evo-text-header_h5">Переменные evo-badge по умолчанию:</h5>

            <code class="code code_block code_size-small mb-medium">
                --evo-badge-color: $color-white;<br>
                --evo-badge-background-color: none;<br>
                --evo-badge-background-image: none;<br>
            </code>

            <h5 class="evo-text-header_h5">Градиентная заливка или заливка цветом</h5>

            <p class="mb-medium">Для задания нестандартного цвета бейджа необходимо установить параметр <code>color="custom"</code> и прописать необходимые значения CSS-переменных, например:</p>

            <evo-badge color="custom" [size]="size" style="--evo-badge-background-image: linear-gradient(112.72deg, #D70382 8.35%, #5E205C 91.2%);">
                <evo-icon shape="starOutlined" *ngIf="hasPrefixIcon"></evo-icon>
                Custom background
            </evo-badge>
        </div>
        `,
    props: {
        ...args,
    },
});

Custom.storyName = 'customization';
