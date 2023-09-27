import {moduleMetadata} from '@storybook/angular';
import {EvoBannerModule} from '@evo/ui-kit';

export default {
    title: 'Components/Banner',

    decorators: [
        moduleMetadata({
            imports: [EvoBannerModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        <pre>Type = small</pre>
        <evo-banner [banner]="banner"></evo-banner>

        <br>
        <br>

        <pre>Type = full-width</pre>
        <evo-banner [banner]="banner" type="full-width"></evo-banner>

        <br>
        <br>

        <pre>Type = large</pre>
        <evo-banner [banner]="banner" type="large"></evo-banner>
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
});

Default.storyName = 'default';

export const MarketGrid = () => ({
    template: `
        <div class="banners-grid">
            <div class="banners-grid__big">
                <evo-banner [banner]="banner" type="large"></evo-banner>
            </div>
            <div class="banners-grid__small">
                <evo-banner [banner]="banner"></evo-banner>
            </div>
            <div class="banners-grid__small">
                <evo-banner [banner]="banner"></evo-banner>
            </div>
        </div>

        <style>
            .banners-grid {
                display: grid;
                grid-template-areas: "big ."
                "big .";
                grid-template-rows: 50% 50%;
                grid-template-columns: 58.33333333% 41.66666667%;
            }
            .banners-grid__big {
                grid-area: big;
                margin-right: 30px;
            }
            .banners-grid__small:last-child {
                align-self: end;
            }
        </style>
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
});

MarketGrid.storyName = 'market grid';
