import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoBadgeModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-badge';

storiesOf('Components/Badge', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoBadgeModule,
            ]
        })
    )
    .add('default', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <style>
            .badge-container {
                margin-bottom: 10px;
            }
        </style>
        <div class="story-container">
            <h2>Badges and available colors</h2>
            <div class="story-section">
                <ng-container *ngFor="let color of colorsList">
                    <div class="badge-container">
                        <evo-badge [color]="color">{{color}}</evo-badge>
                    </div>
                </ng-container>
            </div>
        </div>
        `,
        props: {
            colorsList: [
                'DEFAULT_NO_COLOR',
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
            ],
        },
    }))
    .add('with size', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <style>
            .badge-container {
                margin-bottom: 10px;
            }
        </style>
        <div class="story-container">
            <h2>Badges and available sizes</h2>
            <div class="story-section">
                <div class="badge-container" *ngFor="let size of sizesList">
                    <evo-badge [size]="size">{{size}}</evo-badge>
                </div>
            </div>
        </div>
        `,
        props: {
            sizesList: [
               'normal',
               'small',
            ],
        },
    }))
    .add('with fixed width', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <style>
            .badge-container {
                width: 100%;
                margin-bottom: 10px;
            }
        </style>
        <div class="story-container">
            <h2>Badges and custom widths</h2>
            <div class="story-section">
                <div class="badge-container">
                    <evo-badge [width.px]="50">50px</evo-badge>
                </div>
                <div class="badge-container">
                    <evo-badge [width.%]="20">20%</evo-badge>
                </div>
            </div>
        </div>
        `,
    }))
    .add('with multiline', () => ({
        styleUrls: ['../../assets/scss/story-global.scss'],
        template: `
        <div class="story-container">
            <h2>Badge multiline property</h2>
            <div class="story-section">
                <evo-badge multiline="true" [width.px]="85">
                    I <3️ Angular
                    I <3️ Angular
                    I <3️ Angular
                </evo-badge>
            </div>
        </div>
        `,
    }));
