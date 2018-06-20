import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/main.scss';

storiesOf('Typography/EvoAlert', module)
  .add('with type', () => ({
    template: `
    <div class="evo-alert evo-alert_success">Уведомление о успешном событии</div>
    <div class="evo-alert evo-alert_warning">Уведомление с предостережением</div>
    <div class="evo-alert evo-alert_danger">Уведомление об ошибке</div>
    `,
  }))
  .add('with image', () => ({
    template: `
    <div class="evo-alert evo-alert_success evo-alert_img">Уведомление о успешном событии</div>
    <div class="evo-alert evo-alert_warning evo-alert_img">Уведомление с предостережением</div>
    <div class="evo-alert evo-alert_danger evo-alert_img">Уведомление об ошибке</div>
    `,
  }));

