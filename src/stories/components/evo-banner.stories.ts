import {moduleMetadata} from '@storybook/angular';
import {EvoBannerModule, EvoNoteModule} from '@evotor-dev/ui-kit';

const deprecationWarning = `
<div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: solid 1px grey">
<evo-note iconSrc="assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Компонент <strong>evo-banner</strong> устарел. Он будет удалён в следующем мажорном релизе библиотеки.</evo-note>
</div>
`;

export default {
    title: 'Components/Banner',

    decorators: [
        moduleMetadata({
            imports: [EvoBannerModule, EvoNoteModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        ${deprecationWarning}

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
        ${deprecationWarning}

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
