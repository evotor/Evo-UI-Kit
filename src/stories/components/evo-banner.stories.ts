import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import { withDesign } from 'storybook-addon-designs';
import { StoryHelper } from '../common/story-helper';

storiesOf('Components/Banner', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .addDecorator(withDesign)
    .addParameters(
        StoryHelper.setDecoratorConfig(
            {
                designUrl: '',
            }
        )
    )
    .add('default', () => ({
        template: `
        <evo-banner [banner]="banner">Нажми меня</evo-banner>
        `,
        props: {
            banner: {
                id: '123',
                button: 'Попробовать',
                image: '/banner.png',
                title: 'Заголовок',
                url: '/',
                background: '#e25248',
            },
        },
    }));
