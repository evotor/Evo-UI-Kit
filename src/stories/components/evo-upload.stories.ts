import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoUploadModule } from '@evo/ui-kit';
import { EvoButtonModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-button';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvoAlertModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-alert';

const marginStyle = `<style>.margin {margin-top: 24px;}</style>`;

storiesOf('Components/Upload', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUploadModule,
                EvoButtonModule,
                EvoAlertModule,
                ReactiveFormsModule,
            ],
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
    .add('loading state', () => ({
        template: `
                ${marginStyle}
                <evo-upload [loading]="loading"></evo-upload>
                <evo-button (click)="toggleLoading()" class="margin">Toggle loading</evo-button>
        `,
        props: {
            loading: false,
            toggleLoading() {
                this.loading = !this.loading;
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
    .add('with reactive form control', () => ({
        template: `
            ${marginStyle}
            <evo-upload [formControl]="filesControl"></evo-upload>
            <pre class="margin">{{ filesControl | json}}</pre>
        `,
        props: {
            filesControl: new FormControl(null, Validators.required),
        }
    }))
    .add('with control initial value', () => ({
        template: `
            ${marginStyle}
            <evo-upload [formControl]="filesControl"></evo-upload>
            <pre class="margin">{{ filesControl | json}}</pre>
        `,
        props: {
            filesControl: new FormControl([new File([''], 'filename.txt')], Validators.required),
        }
    }))
    .add('without clear all button', () => ({
        template: `<evo-upload [formControl]="filesControl" [hideClearButton]="true"></evo-upload>`,
        props: {
            filesControl: new FormControl([new File([''], 'filename.txt')]),
        }
    }))
    .add('with control disability', () => ({
        template: `
            ${marginStyle}
            <evo-upload [formControl]="filesControl"></evo-upload>
            <evo-button class="margin" (click)="toggleDisability()">Toggle disability</evo-button>
        `,
        props: {
            filesControl: new FormControl([new File([''], 'filename.txt')], Validators.required),
            toggleDisability() {
                this.filesControl.enabled ? this.filesControl.disable() : this.filesControl.enable();
            },
        }
    }))
    .add('with control passed errors', () => ({
        template: `
            ${marginStyle}
            <evo-upload [formControl]="filesControl" [maxFiles]="1" accept="png,zip"></evo-upload>
            <pre class="margin">Control errors: {{ filesControl.errors | json }}</pre>
        `,
        props: {
            filesControl: new FormControl([
                new File([''], 'filename1.txt'),
                new File([''], 'filename2.txt'),
            ], Validators.required),
        }
    }))
;
