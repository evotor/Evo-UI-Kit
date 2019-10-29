import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoPopoverModule } from '@evo/ui-kit';
import '!style-loader!css-loader!sass-loader!../../../projects/evo-ui-kit/src/lib/components/evo-popover/evo-popover-story.scss';

storiesOf('Components/Popover', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoPopoverModule ],
        }),
    ).add('default', () => ({
    /* tslint:disable:max-line-length */
    template:
        `<div style="min-height: 100vh">
            <div class="popover-test">

                <div class="popover-test__row" *ngFor="let row of positions">

                    <div class="popover-test__col" *ngFor="let position of row">
                        <evo-popover [position]="position">
                            <div class="popover-test__card">
                                <h4 class="evo-title evo-title_h4">{{position | titlecase}}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.dolor.</p>
                            </div>
                            <div popover-body>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </evo-popover>
                    </div>

                </div>

            </div>

            <div class="popover-test">

                <h3 class="evo-title">Highlighted text at End</h3>
                <div class="popover-test__row">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex sequi omnis porro itaque architecto dolorem? Eius natus culpa officiis a quae totam aspernatur, laudantium eum magnam reiciendis doloremque porro.
                        <evo-popover position="bottom-start">
                            <span class="evo-link evo-link_dashed">Wow</span>
                            <div popover-body>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </evo-popover>
                    </p>
                </div>

            </div>

            <div class="popover-test">

                <h3 class="evo-title">Highlighted text at Start</h3>
                <div class="popover-test__row">
                    <p>
                        <evo-popover class="inline-block" position="bottom-end">
                            <span class="evo-link evo-link_dashed">Wow</span>
                            <div popover-body>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </evo-popover>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex sequi omnis porro itaque architecto dolorem? Eius natus culpa officiis a quae totam aspernatur, laudantium eum magnam reiciendis doloremque porro.
                    </p>
                </div>

            </div>
        </div>`,
    /* tslint:enable */
    props: {
        positions: [
            ['left', 'top', 'right'],
            ['bottom-start', 'bottom', 'bottom-end'],
        ],
    }
}));
