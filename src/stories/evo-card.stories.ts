import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/main.scss';

storiesOf('Typography/EvoCard', module)
  .add('default', () => ({
    template: `
    <div class="evo-cards">
      <div class="evo-card">
        <div class="evo-card__title">Заголовок</div>
        <div class="evo-card__content">Содержание</div>
        <div class="evo-card__footer"><evo-button size="full-width">Действие!</evo-button></div>
      </div>
    </div>
    `,
  }))
  .add('with image', () => ({
    template: `
    <div class="evo-cards">
      <div class="evo-card">
        <div class="evo-card__title"><img src="/assets/sberbank.png"/></div>
        <div class="evo-card__content">Содержание</div>
        <div class="evo-card__footer"><evo-button size="full-width">Действие!</evo-button></div>
      </div>
    </div>
    `,
  }));
