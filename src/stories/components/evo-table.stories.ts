import {moduleMetadata} from '@storybook/angular';
import {action} from 'storybook/actions';
import {FormsModule} from '@angular/forms';
import {EvoButtonModule, EvoTableModule} from '@evotor-dev/ui-kit';
import {EvoTableWrapperComponent} from './evo-table-wrapper/evo-table-wrapper.component';
import {EvoTableDynamicColumnsComponent} from './evo-table-dynamic-columns/evo-table-dynamic-columns.component';

const data = [
    {
        bank: 'Модульбанк',
        amount: 'до 100 000 ₽',
        period: '24 мес.',
        percent: '12 %',
        delay: '1 день',
        button: 'Кнопка 1',
    },
    {
        bank: 'Промсвязьбанк',
        amount: 'до 300 000 ₽',
        period: 'до 12 мес.',
        percent: '13 %',
        delay: '1–3 дня',
        button: 'Кнопка 2',
    },
    {
        bank: 'Сбербанк',
        amount: 'до 500 000 ₽',
        period: 'до 24 мес.',
        percent: '14 %',
        delay: '2–4 дня',
        button: 'Кнопка 3',
    },
];

const arrayData = [
    ['Казань', 'Грозный', 'Екатеринбург'],
    ['Новосибирск', 'Ростов-на-Дону', 'Санкт-Петербург'],
    ['Краснодар', 'Пенза', 'Воронеж'],
];

const banks = ['Модульбанк', 'Промсвязьбанк', 'Сбербанк', 'Тинькофф', 'Альфа-Банк', 'ВТБ'];
const virtualData = Array.from({length: 1000}, (_, index) => ({
    id: index + 1,
    bank: `${banks[index % banks.length]} №${index + 1}`,
    amount: `до ${((index % 9) + 1) * 100} 000 ₽`,
    period: `${((index % 4) + 1) * 6} мес.`,
    percent: `${10 + (index % 9)} %`,
    delay: `${(index % 5) + 1} дн.`,
}));

export default {
    title: 'Components/Table',

    decorators: [
        moduleMetadata({
            imports: [EvoTableModule, EvoButtonModule, FormsModule],
            declarations: [EvoTableWrapperComponent, EvoTableDynamicColumnsComponent],
        }),
    ],
};

export const Default = () => ({
    template: `
        <evo-table [data]=data>
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>
        `,
    props: {
        data,
    },
});

Default.storyName = 'default';

export const WithArrayData = () => ({
    template: `
        <evo-table [data]=data>
            <evo-table-column prop="0" label="Первый"></evo-table-column>
            <evo-table-column prop="1" label="Второй"></evo-table-column>
            <evo-table-column prop="2" label="Третий"></evo-table-column>
        </evo-table>
      `,
    props: {
        data: arrayData,
    },
});

WithArrayData.storyName = 'with array data';

export const WithFormatter = () => ({
    template: `
        <evo-table [data]=data>
            <evo-table-column prop="bank" label="Банк" [formatter]="formatter"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>
        `,
    props: {
        data,
        formatter: (row, col, cellValue) => `Formatted!${cellValue}`,
    },
});

WithFormatter.storyName = 'with formatter';

export const WithRowInteraction = () => ({
    template: `
        <evo-table [data]=data (rowClick)="onRowClick($event)">
            <evo-table-column prop="bank" label="Банк" [formatter]="formatter"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>
    `,
    props: {
        data,
        formatter: (row, col, cellValue) => `Formatted!${cellValue}`,
        onRowClick: action(`evo-table row click`),
    },
});

WithRowInteraction.storyName = 'with row interaction';

export const WithoutProps = () => ({
    template: `
        <evo-table [data]=data>
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column label="Условия" [formatter]="formatter"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>
        `,
    props: {
        data,
        formatter: (row, col, cellValue) => `${cellValue.amount} на ${cellValue.period} под ${cellValue.percent}`,
    },
});

WithoutProps.storyName = 'without props';

export const WithCustomHeaderColumnTemplate = () => ({
    /* tslint:disable */
    template: `
        <evo-table [data]=data>
            <evo-table-column prop="bank" label="Банк">
                <ng-template #header let-label="label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z"/></svg>
                    &nbsp;<span>{{label}}</span>
                </ng-template>
            </evo-table-column>
            <evo-table-column prop="amount" label="Сумма">
                <ng-template #header let-label="label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-19v11h-1v-12h20v1zm-2-2h-19v11h-1v-12h20v1zm-6 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm.15 4.484v.315h-.3v-.299c-.311-.005-.632-.079-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.217.006.461.043.732.126l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063 0 .516-.404.791-.901.86zm-10.15-7.484v12h20v-12h-20zm18 8.018c-.959.42-1.395 1.022-1.814 1.982h-12.372c-.419-.959-.855-1.562-1.814-1.982v-4.036c.959-.42 1.395-1.022 1.814-1.982h12.371c.42.959.855 1.562 1.814 1.982v4.036z"/></svg>
                    &nbsp;<span>{{label}}</span>
                </ng-template>
            </evo-table-column>
            <evo-table-column prop="period" label="Срок">
                <ng-template #header let-label="label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm1 11.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z"/></svg>
                    &nbsp;<span>{{label}}</span>
                </ng-template>
            </evo-table-column>
        </evo-table>
        `,
    /* tslint:enable */
    props: {
        data,
        formatter: (row, col, cellValue) => `${cellValue.amount} на ${cellValue.period} под ${cellValue.percent}`,
    },
});

WithCustomHeaderColumnTemplate.storyName = 'with custom header column template';

export const WithMobileLabel = () => ({
    /*
     * В мобильной раскладке подпись строки по умолчанию рендерит только текст `label`.
     * Кастомную разметку подписи задаёт опциональный шаблон `#mobileLabel`
     * (тяжёлый `#header` в подпись строки больше не проецируется - см. BREAKING CHANGE мажора).
     */
    template: `
        <evo-table [data]=data class="evo-table_mobile">
            <evo-table-column prop="bank" label="Банк">
                <ng-template #mobileLabel let-label="label">
                    <b>{{ label }}:</b>
                </ng-template>
            </evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
        </evo-table>
        `,
    props: {
        data,
    },
});

WithMobileLabel.storyName = 'with mobile label';

export const WithCustomMarkup = () => ({
    template: '<app-evo-table-wrapper/>',
});

WithCustomMarkup.storyName = 'with custom markup';

export const WithThemes = () => ({
    template: `
        <h2 style="margin:40px">_mobile</h2>
        <evo-table [data]=data class="evo-table_mobile">
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>

        <h2 style="margin:40px">_mobile-align_right</h2>
        <evo-table [data]=data class="evo-table_mobile evo-table_mobile-align_right">
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>

        <h2 style="margin:40px">_with-title</h2>
        <evo-table [data]=data class="evo-table_mobile evo-table_with-title">
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег"></evo-table-column>
            <evo-table-column>
                <ng-template #content let-row="row" let-col="col">
                    <button evoButton size="small" color="secondary" theme="rounded-outline">{{ data[row].button }}</button>
                </ng-template>
            </evo-table-column>
        </evo-table>

        <!-- тема устаревшая: mobileLayout="table" - её исправленная замена (шапка видна, подписей нет), см. story 'with mobile layout table' -->
        <h2 style="margin:40px">_mobile_short (устаревшая, замена - mobileLayout="table")</h2>
        <evo-table [data]=data class="evo-table_mobile_short">
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
        </evo-table>
        `,
    props: {
        data,
    },
});

WithThemes.storyName = 'with themes';

export const WithAlignment = () => ({
    template: `
            <evo-table [data]=data>
                <evo-table-column prop="bank" label="Банк" className="text-left"></evo-table-column>
                <evo-table-column prop="amount" label="Сумма" className="text-center"></evo-table-column>
                <evo-table-column prop="period" label="Срок" className="text-right"></evo-table-column>
            </evo-table>
        `,
    props: {
        data,
    },
});

WithAlignment.storyName = 'with alignment';

export const WithDynamicColumns = () => ({
    template: '<evo-table-dynamic-columns/>',
});

WithDynamicColumns.storyName = 'with dynamic columns';

export const WithVirtualScroll = () => ({
    /*
     * Виртуализация (opt-in): в DOM только видимое окно строк плюс буфер, поэтому 1000 строк стоят
     * столько же, сколько 20. Режим требует ограниченной по высоте таблицы и фиксированной высоты строки,
     * ширину колонок задают классы (контент их не растягивает). Ограничения - в MIGRATION.md.
     *
     * Переключатель мобильной раскладки (`mobileLayout`) меняет поведение на УЗКОМ вьюпорте:
     * "mobile (карточки)" - строка становится карточкой фиксированной высоты; "table" - остаётся
     * колоночной. На широком экране обе одинаковы - переключите viewport на мобильный (или сузьте окно),
     * чтобы увидеть разницу.
     */
    template: `
        <p>1000 строк, в DOM - только видимое окно. Проверить можно инспектором: строк в разметке ~15-30.</p>
        <div class="story-toolbar">
            <span>Мобильная раскладка:</span>
            <button
                evoButton
                size="small"
                theme="rounded-outline"
                [color]="layout === 'cards' ? 'primary' : 'secondary'"
                (click)="layout = 'cards'"
            >
                mobile (карточки)
            </button>
            <button
                evoButton
                size="small"
                theme="rounded-outline"
                [color]="layout === 'table' ? 'primary' : 'secondary'"
                (click)="layout = 'table'"
            >
                table
            </button>
            <span class="story-toolbar__value">mobileLayout = "{{ layout }}"</span>
        </div>
        <evo-table [data]="data" [virtualScroll]="true" [mobileLayout]="layout" [rowHeight]="48" style="height: 480px">
            <evo-table-column prop="id" label="№" className="col-id"></evo-table-column>
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент" className="text-right"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег" className="text-right"></evo-table-column>
        </evo-table>
        <!--
            В приложении класс ширины колонки лежит в глобальных стилях. В story ту же "глобальность"
            даёт \`::ng-deep\`: обычный \`<style>\` в шаблоне Angular инкапсулировал бы \`.col-id\` под story-компонент,
            и до ячейки таблицы он бы не долетел.
        -->
        <style>
            .story-toolbar {
                display: flex;
                gap: 8px;
                align-items: center;
                margin-bottom: 12px;
            }
            .story-toolbar__value {
                color: #6c6c6c;
            }
            :host ::ng-deep .col-id { flex: 0 0 64px; }
        </style>
        `,
    props: {
        data: virtualData,
        layout: 'cards',
    },
});

WithVirtualScroll.storyName = 'with virtual scroll';

export const WithVirtualScrollStickyColumns = () => ({
    /*
     * Виртуализация + горизонтальный скролл + sticky-колонки. Колонки шире таблицы -> таблица скроллится
     * по горизонтали, шапка и тело едут вместе (общий скролл-бокс). Крайние колонки прижаты: № слева,
     * "Действие" справа - и в шапке, и в теле. Sticky задаёт потребитель через className (фон/тень/слой
     * тоже на нём); компонент даёт только синхронный скролл и прижатую сверху шапку.
     */
    template: `
        <p>Колонки шире таблицы: горизонтальный скролл, крайние колонки (№ и «Действие») прижаты.</p>
        <evo-table [data]="data" [virtualScroll]="true" [rowHeight]="48" style="height: 480px; width: 600px">
            <evo-table-column prop="id" label="№" className="col-id"></evo-table-column>
            <evo-table-column prop="bank" label="Банк" className="col-wide"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма" className="col-wide"></evo-table-column>
            <evo-table-column prop="period" label="Срок" className="col-wide"></evo-table-column>
            <evo-table-column prop="percent" label="Процент" className="col-wide"></evo-table-column>
            <evo-table-column prop="delay" label="Действие" className="col-actions"></evo-table-column>
        </evo-table>
        <style>
            :host ::ng-deep .col-id {
                flex: 0 0 64px;
                position: sticky;
                left: 0;
                z-index: 2;
                /* наследует фон строки (белый/серый зебры) - sticky-колонка следует за зеброй */
                background: inherit;
            }
            :host ::ng-deep .col-wide { flex: 0 0 200px; }
            :host ::ng-deep .col-actions {
                flex: 0 0 120px;
                position: sticky;
                right: 0;
                z-index: 2;
                background: inherit;
            }
        </style>
        `,
    props: {
        data: virtualData,
    },
});

WithVirtualScrollStickyColumns.storyName = 'with virtual scroll sticky columns';

export const WithMobileLayoutTable = () => ({
    /*
     * mobileLayout="table" выключает карточное преобразование: таблица читается таблицей и на телефоне -
     * шапка видна, подписей строк нет, раскладка как на десктопе. Если колонки не помещаются, таблица
     * прокручивается по горизонтали внутри своего контейнера (скролл встроен). Проверять на мобильном
     * вьюпорте (или сузив окно): без входа таблица стала бы карточками.
     * Работает и в виртуализированном режиме - высота строки там остаётся rowHeight (но скролла нет).
     */
    template: `
        <p>Без карточек: на мобильном вьюпорте остаётся табличная раскладка с шапкой, а если колонки не влезают - горизонтальный скролл.</p>
        <evo-table [data]="data" mobileLayout="table">
            <evo-table-column prop="id" label="№" className="col-id"></evo-table-column>
            <evo-table-column prop="bank" label="Банк"></evo-table-column>
            <evo-table-column prop="amount" label="Сумма"></evo-table-column>
            <evo-table-column prop="period" label="Срок"></evo-table-column>
            <evo-table-column prop="percent" label="Процент" className="text-right"></evo-table-column>
            <evo-table-column prop="delay" label="Получение денег" className="text-right"></evo-table-column>
        </evo-table>
        `,
    props: {
        data,
    },
});

WithMobileLayoutTable.storyName = 'with mobile layout table';
