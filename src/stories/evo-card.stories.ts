import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/main.scss';
import '!style-loader!css-loader!sass-loader!./evo-card.stories.scss';

storiesOf('Typography/EvoCard', module)
  .addDecorator(
    moduleMetadata({
      imports: [ EvoUiKitModule ],
    }),
  )
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
        <div class="evo-card__title"><img src="/sberbank.png"/></div>
        <div class="evo-card__content">Содержание</div>
        <div class="evo-card__footer"><evo-button size="full-width">Действие!</evo-button></div>
      </div>
    </div>
    `,
  }))
  .add('multiple cards', () => ({
    template: `
    <div class="multiple-cards">
      <div class="evo-card">
        <div class="evo-card__title">Заголовок</div>
        <div class="evo-card__content">
          <ul>
            <li>Элемент списка</li>
            <li>Элемент списка</li>
            <li>Элемент списка</li>
            <li>Элемент списка</li>
            <li>Элемент списка</li>
          </ul>
        </div>
        <div class="evo-card__footer"><evo-button size="full-width">Действие!</evo-button></div>
      </div>
      <div class="evo-card">
        <div class="evo-card__title">Заголовок</div>
        <div class="evo-card__content">Содержание</div>
        <div class="evo-card__footer"><evo-button size="full-width">Действие!</evo-button></div>
      </div>
    </div>
    `,
  }));
