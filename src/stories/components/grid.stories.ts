import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/main.scss';

storiesOf('Components/Grid', module)
    .add('default', () => ({
        template: `
        <style>
            .my-block {
                background: #C4C4C4;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 25vh;
            }
            .my-title {
                color: #FFFFFF;
            }
        </style>
        <div class="evo-content">
            <div class="evo-content__header">
                <h1 class="evo-title evo-title_h1">Заголовок</h1>
            </div>
            <div class="evo-content__block my-block">
                <h2 class="evo-title evo-tile_h2 my-title">Контент</h2>
            </div>
            <div class="evo-content__block my-block">
                <h2 class="evo-title evo-tile_h2 my-title">Контент</h2>
            </div>
        </div>
        `,
    }));
