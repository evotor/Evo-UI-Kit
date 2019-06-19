import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoAlertModule } from 'evo-ui-kit';

storiesOf('Components/Alert', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        EvoAlertModule
      ],
    }),
  )
  .add('default', () => ({
    template: `
        <evo-alert>Содержимое уведомления типа <strong>Успех (success, по умолчанию)</strong></evo-alert>
        <evo-alert type="warning">Содержимое уведомления типа <strong>Предупреждение (warning)</strong></evo-alert>
        <evo-alert type="danger">Содержимое уведолмения типа <strong>Ошибка (danger)</strong></evo-alert>
        `,
  }))
  .add('with default icon and size', () => ({
    template: `
        <evo-alert icon="success">Успех</evo-alert> <br/>
        <evo-alert icon="exclamation" type="danger">Ошибка</evo-alert> <br/>
        <evo-alert icon="success" size="large">Успех</evo-alert> <br/>
        <evo-alert icon="exclamation" size="large" type="danger">Ошибка</evo-alert> <br/>
        `,
  }))
  .add('with custom icon URL', () => ({
    template: `
          <evo-alert type="success" iconSrc="https://evotor.ru/app/themes/evotor-main/dist/img/57.svg">
            Использовать <code>iconSrc</code> вместо дефолтного типа иконки <code>icon</code>
          </evo-alert>
          `,
  }))
  .add('with close icon', () => ({
    template: `
            <evo-alert
                icon="success"
                [closable]="true"
                (close)="alertCloseAction()"
                >
                Уведомление с иконкой «Закрыть»
            </evo-alert>`,
    props: {
      alertCloseAction: action('evo-alert close action'),
    },
  }));
