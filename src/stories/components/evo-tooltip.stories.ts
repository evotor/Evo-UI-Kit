import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoTooltipModule } from '@evo/ui-kit';
import '!style-loader!css-loader!sass-loader!../../../projects/evo-ui-kit/src/lib/components/evo-tooltip/stories/evo-tooltip-story.scss';

storiesOf('Components/Tooltip', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoTooltipModule ],
        }),
    ).add('default', () => ({
        /* tslint:disable:max-line-length */
        template:
        `<div style="min-height: 100vh">
            <div class="tooltip">

                <div class="tooltip__row" *ngFor="let row of positions">

                    <div class="tooltip__col" *ngFor="let position of row">
                        <div class="tooltip__card" [evoTooltip]="content" [evoTooltipPosition]="position">
                            <h4 class="evo-title evo-title_h4">{{position | titlecase}}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.dolor.</p>
                        </div>

                        <ng-template #content>
                            <div>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </ng-template>
                    </div>

                </div>

            </div>

            <div class="tooltip">

                <h3 class="evo-title">Highlighted text at End</h3>
                <div class="tooltip__row">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex sequi omnis porro itaque architecto dolorem? Eius natus culpa officiis a quae totam aspernatur, laudantium eum magnam reiciendis doloremque porro.
                        <span class="evo-link evo-link_dashed" [evoTooltip]="content" evoTooltipPosition="bottom-start">Wow</span>

                        <ng-template #content>
                            <div>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </ng-template>
                    </p>
                </div>

            </div>

            <div class="tooltip">

                <h3 class="evo-title">Highlighted text at Start</h3>
                <div class="tooltip__row">
                    <p>
                        <span class="evo-link evo-link_dashed" [evoTooltip]="content" evoTooltipPosition="bottom-end">Wow</span>
                        . Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex sequi omnis porro itaque architecto dolorem? Eius natus culpa officiis a quae totam aspernatur, laudantium eum magnam reiciendis doloremque porro.

                        <ng-template #content>
                            <div>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </ng-template>
                    </p>
                </div>

            </div>
        </div>`,
        /* tslint:enable */
        props: {
            positions: [
                ['top-start', 'top', 'top-end'],
                ['left-start', 'left', 'left-end'],
                ['right-start', 'right', 'right-end'],
                ['bottom-start', 'bottom', 'bottom-end'],
            ],
        }
    }));
