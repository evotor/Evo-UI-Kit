import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { EvoAlertModule } from '@evo/ui-kit';
import { EvoNoteModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-note';

const deprecationWarning = `<evo-note iconSrc="/assets/color-icons/alert-circle.svg" type="danger"><strong>DEPRECATED</strong><br>Компонент <strong>evo-alert</strong> устарел. Пожалуйста, используйте <strong>evo-note</strong>.</evo-note>
<br>
<br>
<hr>
<br>
<br>
`;

storiesOf('Components/Alert', module)
    .addDecorator(
        moduleMetadata({
            imports: [EvoAlertModule, EvoNoteModule]
        })
    )
    .add('default', () => ({
        template: `
        ${deprecationWarning}

        <evo-alert>Содержимое уведомления типа <strong>Успех (success, по умолчанию)</strong></evo-alert>
        <evo-alert type="warning">Содержимое уведомления типа <strong>Предупреждение (warning)</strong></evo-alert>
        <evo-alert type="danger">Содержимое уведолмения типа <strong>Ошибка (danger)</strong></evo-alert>
        `
    }))
    .add('with default icon and size', () => ({
        template: `
        ${deprecationWarning}

        <evo-alert icon="success">Успех</evo-alert> <br/>
        <evo-alert icon="exclamation" type="danger">Ошибка</evo-alert> <br/>
        <evo-alert icon="success" size="large">Успех</evo-alert> <br/>
        <evo-alert icon="exclamation" size="large" type="danger">Ошибка</evo-alert> <br/>
        `
    }))
    .add('with custom icon URL', () => ({
        template: `
        ${deprecationWarning}

          <evo-alert type="success" iconSrc="https://evotor.ru/app/themes/evotor-main/dist/img/57.svg">
            Использовать <code>iconSrc</code> вместо дефолтного типа иконки <code>icon</code>
          </evo-alert>
          `
    }))
    .add('with close icon', () => ({
        template: `
        ${deprecationWarning}

            <evo-alert
                icon="success"
                [closable]="true"
                (close)="alertCloseAction()"
                >
                Уведомление с иконкой «Закрыть»
            </evo-alert>`,
        props: {
            alertCloseAction: action('evo-alert close action')
        }
    }));
