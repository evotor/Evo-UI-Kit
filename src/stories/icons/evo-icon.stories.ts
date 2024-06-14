import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {moduleMetadata} from '@storybook/angular';
import {EvoButtonModule, EvoIconModule, EvoInputModule} from '@evotor-dev/ui-kit';
import {EvoIconsWrapperComponent} from '../components/evo-icons-wrapper/evo-icons-wrapper.component';
import {icons} from '@evotor-dev/ui-kit/icons';
import {COLOR_ICONS_LIST} from '../../generated/color-icons';
import {EvoToastModule} from '../../../projects/evo-ui-kit/src/public_api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
    title: 'Icons/Monochrome icons',

    decorators: [
        moduleMetadata({
            declarations: [EvoIconsWrapperComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                EvoIconModule,
                EvoInputModule,
                EvoToastModule,
                EvoButtonModule,
                EvoIconModule.forRoot([
                    ...icons,
                    {
                        name: 'customIcons',
                        shapes: {
                            /* tslint:disable */
                            pants:
                                '<path d="M23.998 6C22.137 10.156 18.88 13.8 15.061 15.999V16H8.94C5.121 13.801 1.863 10.156 0.002 6H0V0H24V6H23.998V6ZM14.008 4H9.992C9.905 6.493 9.079 8.405 7.383 9.974C8.54 11.557 9.379 13.327 9.769 15H14.231C14.621 13.327 15.461 11.557 16.617 9.974C14.921 8.405 14.095 6.494 14.008 4ZM1.266 6.331C2.294 8.381 4.563 12.026 8.643 14.648C7.647 11.266 4.75 7.564 1.266 6.331V6.331ZM22.734 6.331C19.251 7.565 16.354 11.266 15.358 14.648C19.438 12.026 21.706 8.381 22.734 6.331ZM23 4H15.008C15.09 6.178 15.782 7.816 17.234 9.185C18.792 7.318 20.797 5.811 23 5.2V4V4ZM1 4V5.2C3.203 5.811 5.209 7.317 6.766 9.184C8.218 7.816 8.91 6.178 8.992 4H1V4ZM23 3V1H1V3H23Z"/>',
                            tanktop:
                                '<path d="M11.502 0L14.666 0.646C13.575 3.686 13.95 5.205 13.986 5.394C14.423 7.666 15.647 8.771 15.998 9.062L16 24H0V9.061C0.36 8.769 1.579 7.657 2.014 5.394C2.045 5.229 2.396 3.785 1.356 0.647L4.484 0.009C5.89 1.998 7.537 2.067 7.99 2.067C9.307 2.067 10.567 1.315 11.502 0V0ZM1 23H15V9.518C14.553 9.082 13.43 7.799 13.004 5.582C12.707 4.036 13.106 2.274 13.356 1.4L12.293 1.185C11.815 3.561 10.946 6.998 8 6.998C5.043 6.998 4.173 3.561 3.695 1.184L2.639 1.402C2.879 2.292 3.277 4.116 2.996 5.582C2.57 7.799 1.447 9.082 1 9.518V23V23ZM4.814 1.774C5.222 3.596 6.066 5.999 8 5.999C9.93 5.999 10.772 3.593 11.175 1.78C10.461 2.416 9.393 3.064 7.991 3.061C6.841 3.058 5.748 2.609 4.814 1.774V1.774Z"/>',
                            /* tslint:enable */
                        },
                    },
                ]),
            ],
        }),
    ],
};

export const All = () => ({
    template: `<evo-icons-wrapper></evo-icons-wrapper>`,
});

export const CustomImportExample = () => ({
    template: `
        <style>
            pre {
                padding: 20px;
                margin-top: 24px;
                background: #eee;
                border-radius: 4px;
            }
        </style>
        <div class="evo-content">
            <div class="evo-content__block">
                <h3 class="evo-title evo-tile_h3">Import all icons</h3>
                <pre>
import {{'{'}} icons {{'}'}} from '&#64;evotor-dev/ui-kit/icons';
...
imports: [
    EvoIconModule.forRoot(icons),
] ...
                </pre>
            </div>
            <div class="evo-content__block">
                <h3 class="evo-title evo-tile_h3">Import single category</h3>
                <pre>
import {{'{'}} headerIcons {{'}'}} from '&#64;evotor-dev/ui-kit/icons/header';
...
imports: [
    EvoIconModule.forRoot([headerIcons]),
] ...
                </pre>
            </div>
            <div class="evo-content__block">
                <h3 class="evo-title evo-tile_h3">Import two icons from category</h3>
                <pre>
import {{'{'}} iconCalendar, iconAlert {{'}'}} from '&#64;evotor-dev/ui-kit/icons/system';
...
imports: [
    EvoIconModule.forRoot([{{'{'}}
        name: 'customCategory',
        shapes: {{'{'}}
            calendar: iconCalendar,
            alert: iconAlert
        {{'}'}}
    {{'}'}}]),
]...
                </pre>
            </div>
        </div>
        `,
});

CustomImportExample.storyName = 'Custom import example';

export const SizeAndColor = () => ({
    template: `
        <style>.row { display: flex; }</style>
        <div class="row" *ngFor="let color of colors">
            <div class="row" *ngFor="let c of color">
                <div class="row" *ngFor="let icon of icons">
                    <evo-icon *ngFor="let s of sizes" [style.width]="s + 'px'" [style.fill]="c" [shape]="icon"></evo-icon>
                </div>
            </div>
        </div>`,
    props: {
        colors: [
            ['#880e4f', '#ad1457', '#c2185b'],
            ['#33691e', '#558b2f', '#689f38'],
            ['#e65100', '#ef6c00', '#f57c00'],
        ],
        sizes: [16, 24, 32, 48],
        icons: ['cart', 'bell', 'settings'],
    },
});

SizeAndColor.storyName = 'Size and color';

export const DynamicIconShape = () => ({
    template: `
        <div class="evo-content">
            <div class="evo-content__block">
                <evo-icon [shape]="shapes[shapeIndex]" style="width: 32px; height: 32px;"></evo-icon>

                <p>{{ shapes[shapeIndex] }}</p>
            </div>
            <button evoButton (click)="onShapeChange()">Сменить иконку</button>
        </div>`,
    props: {
        shapes: ['cart', 'settings', 'person'],
        shapeIndex: 0,
        onShapeChange() {
            this.shapeIndex = ++this.shapeIndex % this.shapes.length;
        },
    },
});

DynamicIconShape.storyName = 'Dynamic icon shape';

export const DifferentAspectRatio = () => ({
    template: `
        <style>
            .icon-pants { width: 48px; }
            .icon-tanktop { width: 32px; }
        </style>
        <div class="evo-content">
            <div class="evo-content__block">
                <p><evo-icon shape="pants" svgWidth="24" svgHeight="16" class="icon-pants"></evo-icon></p>
                <p><evo-icon shape="tanktop" svgWidth="16" svgHeight="24" class="icon-tanktop"></evo-icon></p>
            </div>
        </div>`,
});

DifferentAspectRatio.storyName = 'Different aspect ratio';

export const BigColorIconAssets = () => ({
    name: 'Icons/Color icons',
    template: `
<style>
.wrapper {
    display:flex;
    flex-flow: row wrap;
}
.icon {
    width: 100px;
    margin: 32px;
}
pre {
    padding: 20px;
    margin-top: 24px;
    background: #eee;
    border-radius: 4px;
}
img {
    display: block;
    width: 48px;
    height: 48px;
}
</style>
<div class="evo-content">
    <h3 class="evo-title evo-title_h3">Import assets in your project</h3>
    <pre>
    angular.json

    {{ '{' }}
        "glob": "**/*",
        "input": "./node_modules/&#64;evotor-dev/ui-kit/assets/",
        "output": "./assets/ui-kit/"
    {{ '}' }}
    </pre>

    <div class="wrapper">
        <div *ngFor="let iconName of icons" class="icon">
            <img src="assets/color-icons/{{ iconName }}" />
            <p>{{ iconName }}</p>
        </div>
    </div>
</div>
        `,
    props: {
        icons: COLOR_ICONS_LIST,
    },
});

BigColorIconAssets.storyName = 'Big color icon assets';
