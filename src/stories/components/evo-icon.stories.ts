import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoIconModule, EvoUiKitModule } from 'evo-ui-kit';
import { EvoIconsWrapperComponent } from './evo-icons-wrapper/evo-icons-wrapper.component';
import { icons } from 'evo-ui-kit/icons';

storiesOf('Icons', module)
    .addDecorator(
        moduleMetadata({
            declarations: [ EvoIconsWrapperComponent ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                EvoUiKitModule,
                EvoIconModule.forRoot(icons),
            ],
        }),
    )
    .add('All', () => ({
        template: `<evo-icons-wrapper></evo-icons-wrapper>`,
    }))
    .add('Custom import example', () => ({
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
import {{'{'}} icons {{'}'}} from 'evo-ui-kit/icons';
...
imports: [
    EvoIconModule.forRoot(icons),
] ...
                </pre>
            </div>
            <div class="evo-content__block">
                <h3 class="evo-title evo-tile_h3">Import single category</h3>
                <pre>
import {{'{'}} headerIcons {{'}'}} from 'evo-ui-kit/icons/header';
...
imports: [
    EvoIconModule.forRoot([headerIcons]),
] ...
                </pre>
            </div>
            <div class="evo-content__block">
                <h3 class="evo-title evo-tile_h3">Import two icons from category</h3>
                <pre>
import {{'{'}} iconCalendar, iconAlert {{'}'}} from 'evo-ui-kit/icons/system';
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
    }))
    .add('Size and color', () => ({
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
                [ '#880e4f', '#ad1457', '#c2185b' ],
                [ '#33691e', '#558b2f', '#689f38' ],
                [ '#e65100', '#ef6c00', '#f57c00' ],
            ],
            sizes: [ 16, 24, 32, 48 ],
            icons: [ 'cart', 'bell', 'settings' ]
        }
    }));
