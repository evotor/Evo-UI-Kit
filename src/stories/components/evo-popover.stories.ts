import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoPopoverModule } from '@evo/ui-kit';
import '!style-loader!css-loader!sass-loader!../../../projects/evo-ui-kit/src/lib/components/evo-popover/evo-popover-story.scss';

storiesOf('Components/Popover', module)
    .addDecorator(
        moduleMetadata({
            imports: [ EvoPopoverModule ],
        }),
    ).add('default', () => ({
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

                <div class="popover-test__row">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium provident repudiandae?
                        <evo-popover position="bottom-start" [show]="true">
                            <span class="hilighted">Hilighted</span>
                            <div popover-body>
                                <div>Some popover text here...</div>
                                <a href="https://evotor.ru" target="_blank">Some link</a>
                            </div>
                        </evo-popover>
                    </p>
                </div>

            </div>
        </div>`,
        props: {
            positions: [
                ['left', 'top', 'right'],
                ['right', 'bottom', 'left'],
            ],
        }
    }));
