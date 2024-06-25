import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {
    EvoButtonModule,
    EvoIconComponent,
    EvoInputModule,
    evoLocalAssetsPathProvider,
    EvoToastModule,
} from '@evotor-dev/ui-kit';
import {EvoIconsWrapperComponent} from '../components/evo-icons-wrapper/evo-icons-wrapper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

export default {
    title: 'Icons/Monochrome icons',

    decorators: [
        applicationConfig({
            providers: [
                importProvidersFrom(HttpClientModule),
                importProvidersFrom(BrowserAnimationsModule),
                evoLocalAssetsPathProvider('/assets/sb'),
            ],
        }),
        moduleMetadata({
            declarations: [EvoIconsWrapperComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoInputModule,
                EvoToastModule,
                EvoButtonModule,
                EvoIconComponent,
            ],
        }),
    ],
};

export const All = () => ({
    template: `<evo-icons-wrapper></evo-icons-wrapper>`,
});

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
