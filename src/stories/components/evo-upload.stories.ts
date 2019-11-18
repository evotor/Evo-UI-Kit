import { moduleMetadata, storiesOf } from '@storybook/angular';
import { EvoUploadModule } from '@evo/ui-kit';
import { EvoButtonModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-button';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvoAlertModule } from '../../../projects/evo-ui-kit/src/lib/components/evo-alert';
import { EvoUploadItemClickEvent } from 'projects/evo-ui-kit/src/public_api';

export function base64ToArrayBuffer(base64: string): Uint8Array {
    const binaryString = window.atob(base64);
    const binaryLen = binaryString.length;
    const bytesArray = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
        const ascii = binaryString.charCodeAt(i);
       bytesArray[i] = ascii;
    }
    return bytesArray;
}
const marginStyle = `<style>.margin {margin-top: 24px;}</style>`;
// tslint:disable-next-line
const imgBase64 = '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';
const bytes = base64ToArrayBuffer(imgBase64);
const imgFileFixture = new File([bytes], 'fixture.png', { type: 'image/png' });

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
        /* tslint:disable */
        template: `
            <pre>
                Для упрощенного указания размера файла используется библиотека <a target="_blank" href="https://github.com/visionmedia/bytes.js">bytes</a>
            </pre>
            <evo-upload [fileSizeLimit]="fileSizeLimit"></evo-upload>
        `,
        /* tslint:enable */
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
    .add('with clickable items', () => ({
        template: `
            ${marginStyle}
            <evo-upload
                [formControl]="filesControl"
                [hideClearButton]=true accept="png,jpg"
                [clickableFiles]="true"
                [hideSubmitButton]="true"
                (onClickFile)="onClickItem($event)"
                ></evo-upload>
            <p>Click item link to view image</p>
            <div class="img-preview"></div>
        `,
        props: {
            filesControl: new FormControl([imgFileFixture], Validators.required),
            previewImage: '',
            onClickItem: ({ file }: EvoUploadItemClickEvent) => {
                const previewEl = document.querySelector('.img-preview');
                const reader = new FileReader();
                previewEl.innerHTML = '';
                reader.readAsDataURL(file);
                reader.addEventListener('load', (event: Event) => {
                    const loadedReader = event.target as FileReader;
                    const preview = document.createElement('img');
                    preview.src = loadedReader.result as string;
                    preview.classList.add('preview');
                    previewEl.appendChild(preview);
                });
            }
        }
    }))
;
