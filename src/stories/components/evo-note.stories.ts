import {moduleMetadata} from '@storybook/angular';
import {EvoNoteModule} from '../../../projects/evo-ui-kit/src/lib/components/evo-note';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Note',

    decorators: [
        moduleMetadata({
            imports: [EvoNoteModule],
        }),
    ],
};

export const Default = () => ({
    template: `
        <evo-note>Содержимое уведомления типа <strong>Успех (success, по умолчанию)</strong></evo-note>  <br/>
        <evo-note type="warning">Содержимое уведомления типа <strong>Предупреждение (warning)</strong></evo-note> <br/>
        <evo-note type="danger">Содержимое уведомления типа <strong>Ошибка (danger)</strong></evo-note> <br/>
        <evo-note type="info">Содержимое уведомления типа <strong>Инфо (info)</strong></evo-note>
        `,
});

Default.storyName = 'default';

export const WithCustomIconUrl = () => ({
    template: `
        <evo-note iconSrc="https://market-test.evotor.ru/static/targeting/4512390b-98e6-4b6d-8c08-7f4d3beab53c.png">
           Для отмены подписки или разовой оплаты, перейдите в раздел «Мои приложения» и удалите нужное приложение
        </evo-note>
        `,
});

WithCustomIconUrl.storyName = 'with custom icon URL';

export const WithCloseIcon = () => ({
    template: `
            <evo-note [closable]="true" (close)="evoNoteCloseAction($event)">Уведомление с иконкой «Закрыть»</evo-note>`,
    props: {
        evoNoteCloseAction: action('evo-note close action'),
    },
});

WithCloseIcon.storyName = 'with close icon';
