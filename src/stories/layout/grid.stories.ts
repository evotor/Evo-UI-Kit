export default {
    title: 'Layout/Grid',
};

export const Default = () => ({
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
});

Default.storyName = 'default';

export const NestedGrid = () => ({
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
            .custom-block {
                background: #fcf2dd;
                margin: 0 0 60px;
                padding: 15px 30px;
            }
        </style>
        <div class="evo-content">
            <div class="evo-content__header">
                <h1 class="evo-title evo-title_h1">Заголовок</h1>
            </div>
            <div class="evo-content__block my-block">
                <h2 class="evo-title evo-tile_h2 my-title">Контент</h2>
            </div>
            <div class="custom-block">
                <div class="evo-content__header">
                    <h3 class="evo-title evo-tile_h3">Custom block title</h3>
                </div>
                <div class="evo-content__block my-block">
                    <h2 class="evo-title evo-tile_h2 my-title">Контент</h2>
                </div>
                <div class="evo-content__block my-block">
                    <h2 class="evo-title evo-tile_h2 my-title">Контент</h2>
                </div>
            </div>
            <div class="evo-content__block my-block">
                <h2 class="evo-title evo-tile_h2 my-title">Контент</h2>
            </div>
        </div>
        `,
});

NestedGrid.storyName = 'nested grid';
