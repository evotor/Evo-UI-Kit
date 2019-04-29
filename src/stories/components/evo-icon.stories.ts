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
        <style>
            .icon-clock {
                display: block;
                width: 64px;
                fill: Crimson;
                margin-bottom: 24px;
            }
            .icon-calendar {
                display: block;
                width: 48px;
                fill: Tomato;
                margin-bottom: 18px;
            }
            .icon-lock {
                display: block;
                width: 32px;
                fill: DarkViolet;
                margin-bottom: 12px;
            }
        </style>
        <evo-icon class="icon-clock" shape="clock"></evo-icon>
        <evo-icon class="icon-calendar" shape="calendar"></evo-icon>
        <evo-icon class="icon-lock" shape="lock"></evo-icon>`,
    }));
