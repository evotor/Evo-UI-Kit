import {moduleMetadata} from '@storybook/angular';
import {EvoButtonModule, EvoUiKitModule} from '@evotor-dev/ui-kit';

export default {
    title: 'Layout/Card',

    decorators: [
        moduleMetadata({
            imports: [EvoUiKitModule, EvoButtonModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        <div class="evo-cards">
            <div class="evo-card">
                <div class="evo-card__title">Заголовок</div>
                <div class="evo-card__content">Содержание</div>
                <div class="evo-card__footer"><button evoButton>Действие!</button></div>
            </div>
        </div>
        `,
});

Default.storyName = 'default';

export const Bordered = () => ({
    template: `
        <div class="evo-cards">
            <div class="evo-card" [evoUiClass]="['bordered']">
                <div class="evo-card__title">
                    <h3 class="evo-title evo-title_h3">Заголовок h3</h3>
                </div>
                <div class="evo-card__content">Содержание</div>
                <div class="evo-card__footer"><button evoButton>Действие!</button></div>
            </div>
        </div>
        `,
});

Bordered.storyName = 'bordered';

export const WithImage = () => ({
    template: `
        <div class="evo-cards">
            <div class="evo-card">
                <div class="evo-card__title"><img src="/assets/sb/sberbank.png"/></div>
                <div class="evo-card__content">Содержание</div>
                <div class="evo-card__footer"><button evoButton>Действие!</button></div>
            </div>
        </div>
        `,
});

WithImage.storyName = 'with image';

export const MultipleCards = () => ({
    template: `
        <div class="multiple-cards">
            <div class="evo-card">
                <div class="evo-card__title">Заголовок</div>
                <div class="evo-card__content">
                    <ul class="evo-list">
                        <li>Элемент списка</li>
                        <li>Элемент списка</li>
                        <li>Элемент списка</li>
                        <li>Элемент списка</li>
                        <li>Элемент списка</li>
                    </ul>
                </div>
                <div class="evo-card__footer"><button evoButton>Действие!</button></div>
            </div>
            <div class="evo-card">
                <div class="evo-card__title">Заголовок</div>
                <div class="evo-card__content">Содержание</div>
                <div class="evo-card__footer"><button evoButton>Действие!</button></div>
            </div>
        </div>
        `,
});

MultipleCards.storyName = 'multiple cards';
