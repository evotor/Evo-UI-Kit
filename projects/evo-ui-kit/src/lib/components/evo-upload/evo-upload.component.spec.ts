import { async } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { EvoUploadComponent } from './evo-upload.component';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { DeclinationPipe } from '../../pipes/declination.pipe';
import { EvoAlertComponent } from '../evo-alert';

const fileFixtures: Partial<File>[] = [{
    size: 1000,
    name: 'pic-1.png',
    type: 'image/png',
}, {
    size: 1000,
    name: 'text.txt',
    type: 'text/plain',
}, {
    size: 1000000,
    name: 'huge-image.png',
    type: 'image/plain',
}];

const dropZoneHint = 'Available extensions: png, jpg, jpeg';

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    @ViewChild(EvoUploadComponent)
    public uploadComponent: EvoUploadComponent;
    filesControl = new FormControl([]);
    accept = 'png,jpg,jpeg';
    dropZoneHint: string;
    loading = false;
    hideClearButton = false;
    hideSubmitButton = false;
    clickableFiles = true;
    earlyValidation = false;
    fileSizeLimit = '1kb';
    maxFiles = 2;
}

describe('EvoUpload', () => {
    let host: SpectatorWithHost<EvoUploadComponent, TestHostComponent>;
    const createHost = createHostComponentFactory({
        component: EvoUploadComponent,
        declarations: [
            EvoUploadComponent,
            EvoAlertComponent,
            SafeHtmlPipe,
            DeclinationPipe,
        ],
        host: TestHostComponent,
        imports: [
            ReactiveFormsModule,
        ],
    });

    beforeEach(async(() => {
        host = createHost(`
        <evo-upload
            [formControl]="filesControl"
            [accept]="accept"
            [maxFiles]="maxFiles"
            [dropZoneHint]="dropZoneHint"
            [fileSizeLimit]="fileSizeLimit"
            [clickableFiles]="clickableFiles"
            [hideClearButton]="hideClearButton"
            [hideSubmitButton]="hideSubmitButton"
            [earlyValidation]="earlyValidation"
            (onClickFile)="onClickItem($event)"
            ></evo-upload>`);
    }));

    it(`should contain 1 item with file name if 1 file passed`, () => {
        host.hostComponent.filesControl.setValue([fileFixtures[0]]);
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(1);
        expect(host.query('.evo-upload__list-item .evo-upload__link').innerHTML).toEqual(fileFixtures[0].name);
    });

    it(`should have hint in drop zone`, () => {
        const { hostComponent } = host;
        hostComponent.dropZoneHint = dropZoneHint;
        host.detectChanges();
        expect(host.query('.evo-upload__additional-hint')).toBeTruthy();
    });

    it(`should hide buttons`, () => {
        const { hostComponent } = host;
        hostComponent.hideClearButton = true;
        hostComponent.hideSubmitButton = true;
        host.detectChanges();
        expect(host.query('.evo-upload__controls button')).toBeFalsy();
    });

    it(`items should display specified errors`, () => {
        const { hostComponent } = host;
        const upload = hostComponent.uploadComponent;
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        const itemsEls = host.queryAll('.evo-upload__list-item');
        expect(upload.filesForm.controls[0].errors.extension).toBeTruthy();
        expect(itemsEls[0].querySelector('.evo-upload__list-delimiter_error')).toBeTruthy();
        expect(upload.filesForm.controls[1].errors.size).toBeTruthy();
        expect(itemsEls[0].querySelector('.evo-upload__list-delimiter_error')).toBeTruthy();
    });

    it(`should display error alert if maxFiles < files qty`, () => {
        const { hostComponent } = host;
        hostComponent.maxFiles = 1;
        host.detectChanges();
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        expect(host.query('.evo-alert_danger')).toBeTruthy();
    });

    it(`shouldn't display any items if earlyValidation = true & any passed file invalid`, () => {
        const { hostComponent } = host;
        hostComponent.earlyValidation = true;
        host.detectChanges();
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(0);
    });

    it(`should display errors list if earlyValidation = true & passed invalid files`, () => {
        const { hostComponent } = host;
        hostComponent.earlyValidation = true;
        host.detectChanges();
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        const alertEl = host.query('.evo-alert_danger');
        expect(alertEl).toBeTruthy();
        expect(alertEl.querySelectorAll('li').length).toEqual(2);
    });

});
