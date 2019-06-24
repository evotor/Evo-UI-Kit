import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoPaginatorModule } from 'evo-ui-kit';
import { action } from '@storybook/addon-actions';

const onPage = action('evo-paginator page');

storiesOf('Components/Paginator', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoPaginatorModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
            <div>
                <evo-paginator [pageIndex]="0" [length]="60" [pageSize]="10" (page)="onPage($event)"></evo-paginator>
            </div>
       `,
        props: {
            onPage,
        },
    }))
    .add('edge states', () => ({
        template: `
            <div>
                <evo-paginator style="margin-bottom: 20px;" [pageIndex]="0" [length]="60" [pageSize]="10" (page)="onPage($event)"></evo-paginator>
                <evo-paginator style="margin-bottom: 20px;" [pageIndex]="3" [length]="60" [pageSize]="10" (page)="onPage($event)"></evo-paginator>
                <evo-paginator style="margin-bottom: 20px;" [pageIndex]="5" [length]="60" [pageSize]="10" (page)="onPage($event)"></evo-paginator>
            </div>
       `,
        props: {
            onPage,
        },
    }))
;
