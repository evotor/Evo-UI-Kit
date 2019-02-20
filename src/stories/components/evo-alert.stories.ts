import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/Alert', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        EvoUiKitModule,
      ],
    }),
  )
  .add('default', () => ({
    template: `
        <h3 style="margin: 20px;"> Мы находимся в процессе мягкого перехода на новый дизайн алертов.
            Чтобы не сломать старый вид алертов, в новых нужно добавлять параметр <b>version="current"</b>
        </h3>
        <evo-alert version="current">Содержимое уведомления типа <strong>Успех (success, по умолчанию)</strong></evo-alert>
        <evo-alert version="current" type="warning">Содержимое уведомления типа <strong>Предупреждение (warning)</strong></evo-alert>
        <evo-alert version="current" type="danger">Содержимое уведолмения типа <strong>Ошибка (danger)</strong></evo-alert>
        `,
  }))
  .add('with default icon and size', () => ({
    template: `
        <evo-alert version="current" icon="success">Успех</evo-alert> <br/>
        <evo-alert version="current" icon="exclamation" type="danger">Ошибка</evo-alert> <br/>
        <evo-alert version="current" icon="success" size="large">Успех</evo-alert> <br/>
        <evo-alert version="current" icon="exclamation" size="large" type="danger">Ошибка</evo-alert> <br/>
        `,
  }))
  .add('with custom icon URL', () => ({
    template: `
          <evo-alert version="current" type="success" iconSrc="https://evotor.ru/app/themes/evotor-main/dist/img/57.svg">
            Использовать <code>iconSrc</code> вместо дефолтного типа иконки <code>icon</code>
          </evo-alert>
          `,
  }))
  .add('with close icon', () => ({
    template: `
            <evo-alert
                version="current"
                icon="success"
                [closable]="true"
                (close)="alertCloseAction()"
                >
                Уведомление с иконкой «Закрыть»
            </evo-alert>`,
    props: {
      alertCloseAction: action('evo-alert close action'),
    },
  }))
  .add('legacy', () => ({
    template: `
        <evo-alert icon="success">Успех</evo-alert> <br/>
        <evo-alert icon="exclamation" type="danger">Ошибка</evo-alert> <br/>
        <evo-alert icon="success" size="large">Успех</evo-alert> <br/>
        <evo-alert icon="exclamation" size="large" type="danger">Ошибка</evo-alert> <br/>
          `,
  }));
