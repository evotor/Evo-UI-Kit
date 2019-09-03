import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoUploadModule } from '@evo/ui-kit';


storiesOf('Components/Upload', module)
    .addDecorator(
        moduleMetadata({
            imports: [EvoUploadModule],
        }),
    )
    .add('default', () => ({
        template: '<evo-upload (submit)="onSubmit($event)" [loading]="loading"></evo-upload>',
        props: {
            loading: false,
            onSubmit() {
                this.loading = true;

                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            },
        }
    }))
    .add('additional drop zone hint', () => ({
        template: '<evo-upload [dropZoneHint]="dropZoneHint"></evo-upload>',
        props: {dropZoneHint: `размер файла не более 145кб`},
    }))
    .add('limit file size', () => ({
        template: `
            <pre>
                Для упрощенного указания размера файла используется библиотека <a target="_blank" href="https://github.com/visionmedia/bytes.js">bytes</a>
            </pre>
            <evo-upload [fileSizeLimit]="fileSizeLimit"></evo-upload>
        `,
        props: {fileSizeLimit: '1kb'},
    }))
    .add('limit maximum files', () => ({
        template: '<evo-upload [maxFiles]="1"></evo-upload>',
    }))
    .add('input file multiple', () => ({
        template: '<evo-upload [multiple]="multiple"></evo-upload>',
        props: {multiple: true,}
    }))
;
