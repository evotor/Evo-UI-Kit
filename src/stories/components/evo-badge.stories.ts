import {moduleMetadata} from '@storybook/angular';
import {EvoBadgeModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-badge';
import {EvoIconModule} from "@evotor-dev/ui-kit";
import {iconStarOutlined} from "@evotor-dev/ui-kit/icons/system";
import {EvoNoteModule} from "../../../projects/evo-ui-kit/src/lib/components/evo-note";

export default {
    title: 'Components/Badge',

    decorators: [
        moduleMetadata({
            imports: [EvoBadgeModule, EvoNoteModule, EvoIconModule.forRoot([
                {
                    name: 'icons',
                    shapes: {
                        starOutlined: iconStarOutlined,
                    },
                },
            ]),],
        }),
    ],
};

export const Default = () => ({
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
});

Default.storyName = 'default';

export const Custom = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <div class="story-container">
            <h2>CSS Customization</h2>
            <div class="story-section">
                <div class="badge-container">
                    <evo-badge color="custom" style="--evo-badge-background-image: linear-gradient(87.36deg, #E4AF24 -48.16%, #ED2EAC 111.39%)">Custom background</evo-badge>
                </div>
            </div>
            <div class="story-section">
                <div class="badge-container">
                    <evo-badge color="custom" style="--evo-badge-background-image: linear-gradient(90deg, rgba(2,29,36,1) 0%, rgba(20,9,121,1) 81%, rgba(0,212,255,1) 100%); --evo-badge-color: #BEDCE3">Custom background and font</evo-badge>
                </div>
            </div>
        </div>
        `,
});

Custom.storyName = 'custom';

export const WithSize = () => ({
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
        sizesList: ['large', 'normal', 'small'],
    },
});

WithSize.storyName = 'with size';

export const WithFixedWidth = () => ({
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
                <div class="badge-container">
                    <evo-badge [width.%]="70">70%</evo-badge>
                </div>
            </div>
            <h2>Badges with prefix icon and custom widths</h2>
            <div class="story-section">
                <div class="badge-container">
                    <evo-badge [width.px]="70">
                        <evo-icon evoBadgeIcon shape="starOutlined"></evo-icon>
                        70px
                    </evo-badge>
                </div>
                <div class="badge-container">
                    <evo-badge [width.%]="20">
                        <evo-icon evoBadgeIcon shape="starOutlined"></evo-icon>
                        20%
                    </evo-badge>
                </div>
                <div class="badge-container">
                    <evo-badge [width.%]="70">
                        <evo-icon evoBadgeIcon shape="starOutlined"></evo-icon>
                        70%
                    </evo-badge>
                </div>
            </div>
        </div>
        `,
});

WithFixedWidth.storyName = 'with fixed width';

export const WithMultiline = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
        <evo-note type="info" style="display: block; width: 400px">
            <p class="evo-text-header evo-text-header_h4">Внимание:</p>
            <p>В данном режиме не поддерживается <strong>prefix icon</strong></p>
        </evo-note>
        <div class="story-container">
            <h2>Badge multiline property</h2>
            <div class="story-section">
                <evo-badge multiline="true" size="large">
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                </evo-badge>
            </div>
            <div class="story-section">
                <evo-badge multiline="true" size="normal">
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                </evo-badge>
            </div>
            <div class="story-section">
                <evo-badge multiline="true" size="small">
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                </evo-badge>
            </div>
            <h2>Badge multiline property with fixed width</h2>
            <div class="story-section">
                <evo-badge multiline="true" size="large" [width.px]="114">
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                </evo-badge>
            </div>
            <div class="story-section">
                <evo-badge multiline="true" size="normal" [width.px]="89">
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                </evo-badge>
            </div>
            <div class="story-section">
                <evo-badge multiline="true" size="small" [width.px]="79">
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                    I <3️ Angular<br>
                </evo-badge>
            </div>
        </div>
        `,
});

WithMultiline.storyName = 'with multiline';

export const WithIcon = () => ({
    styleUrls: ['../../assets/scss/story-global.scss'],
    template: `
         <style>
            .badge-container {
                margin-bottom: 10px;
            }
        </style>
        <div class="story-container">
            <h2>Badges with prefix icon</h2>
            <div class="story-section">
                <div class="badge-container" *ngFor="let size of sizesList">
                    <evo-badge [size]="size">
                        <evo-icon #prefixIcon evoBadgeIcon shape="starOutlined"></evo-icon>
                        {{size}}
                    </evo-badge>
                </div>
            </div>
        </div>
        `,
    props: {
        sizesList: ['large', 'normal', 'small'],
    },
});

WithIcon.storyName = 'with icon';
