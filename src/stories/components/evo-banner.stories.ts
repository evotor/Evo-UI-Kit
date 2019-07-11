import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Banner', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <pre>Type = small</pre>
        <evo-banner [banner]="banner">Нажми меня</evo-banner>
        
        <br>
        <br>
        
        <pre>Type = full-width</pre>
        <evo-banner [banner]="banner" type="full-width">Нажми меня</evo-banner>
        
        <br>
        <br>
        
        <pre>Type = large</pre>
        <evo-banner [banner]="banner" type="large">Нажми меня</evo-banner>
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
