import {moduleMetadata} from '@storybook/angular';
import {EvoPaginatorModule} from '@evotor-dev/ui-kit';
import {action} from '@storybook/addon-actions';

const onPage = action('evo-paginator page');

export default {
    title: 'Components/Paginator',

    decorators: [
        moduleMetadata({
            imports: [EvoPaginatorModule],
        }),
    ],
};

export const Default = () => ({
    template: `
            <pre>
            [itemsTotal] - общее количество элементов в списке (таблице, и тд), который разделяется пагинацией
            [pageSize] - максимальное количество элементов на страницу
            [currentPage] - текущий номер страницы (натуральное число)
            (pageClick) - событие клика
            </pre>

            <div>
                <evo-paginator [currentPage]="1" [itemsTotal]="60" [pageSize]="10" (pageClick)="onPage($event)"></evo-paginator>
            </div>
       `,
    props: {
        onPage,
    },
});

Default.storyName = 'default';

export const EdgeStates = () => ({
    template: `
            <div>
                <evo-paginator
                    style="margin-bottom: 20px;"
                    [currentPage]="1"
                    [itemsTotal]="60"
                    [pageSize]="10"
                    (pageClick)="onPage($event)"></evo-paginator>

                <evo-paginator
                    style="margin-bottom: 20px;"
                    [currentPage]="7"
                    [itemsTotal]="60"
                    [pageSize]="5"
                    (pageClick)="onPage($event)"></evo-paginator>

                <evo-paginator
                    style="margin-bottom: 20px;"
                    [currentPage]="30"
                    [itemsTotal]="60"
                    [pageSize]="2"
                    (pageClick)="onPage($event)"></evo-paginator>

                <evo-paginator
                    style="margin-bottom: 20px;"
                    [currentPage]="1"
                    [itemsTotal]="139"
                    [pageSize]="10"
                    [visiblePagesLimit]="5"
                    (pageClick)="onPage($event)"></evo-paginator>

            </div>
       `,
    props: {
        onPage,
    },
});

EdgeStates.storyName = 'edge states';
