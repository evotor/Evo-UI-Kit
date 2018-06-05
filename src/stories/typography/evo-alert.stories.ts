import { storiesOf } from '@storybook/angular';
import '!style-loader!css-loader!sass-loader!evo-ui-kit/styles/evo-ui-kit.scss';

storiesOf('Typography/EvoAlert', module)
  .add('with type', () => ({
    template: `
    <div class="evo-alert evo-alert_success">Alert success</div>
    <div class="evo-alert evo-alert_warning">Alert warning</div>
    <div class="evo-alert evo-alert_danger">Alert danger</div>
    `
  }))
  .add('with image', () => ({
    template: `
    <div class="evo-alert evo-alert_success evo-alert_img">Alert success</div>
    <div class="evo-alert evo-alert_warning evo-alert_img">Alert warning</div>
    <div class="evo-alert evo-alert_danger evo-alert_img">Alert danger</div>
    `
  }));

