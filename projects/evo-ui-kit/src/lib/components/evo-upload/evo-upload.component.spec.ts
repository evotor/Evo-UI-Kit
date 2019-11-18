import { async, fakeAsync, tick } from '@angular/core/testing';
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
}];

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    @ViewChild(EvoUploadComponent)
    public uploadComponent: EvoUploadComponent;
    filesControl = new FormControl([fileFixtures[0]]);
    accept = 'png,jpg,jpeg';
    dropZoneHint = 'Available extensions: png, jpg, jpeg';
    loading = false;
    hideClearButton = false;
    hideSubmitButton = false;
}

fdescribe('EvoUpload', () => {
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
            [clickableFiles]="true"
            [hideClearButton]=true
            [hideSubmitButton]="true"
            (onClickFile)="onClickItem($event)"
            ></evo-upload>`);
    }));

    it(`should contain 1 item with file name`, () => {
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(1);
        expect(host.query('.evo-upload__list-item .evo-upload__link').innerHTML).toEqual(fileFixtures[0].name);
    });

    it(`should have hint in drop zone`, () => {
        const { hostComponent } = host;
        hostComponent.hideClearButton = true;
        hostComponent.hideSubmitButton = true;
        host.detectChanges();
        expect(host.query('.evo-upload__controls button')).toBeFalsy();
    });

    it(`should hide buttons`, () => {
        const { hostComponent } = host;
        hostComponent.hideClearButton = true;
        hostComponent.hideSubmitButton = true;
        host.detectChanges();
        expect(host.query('.evo-upload__controls button')).toBeFalsy();
    });

    it(`should display error if file with wrong extension passed`, () => {
        const { hostComponent } = host;
        const upload = hostComponent.uploadComponent;
        hostComponent.filesControl.setValue([fileFixtures[1]]);
        host.detectChanges();
        expect(upload.filesForm.controls[0].errors.extension).toBeTruthy();
        expect(host.query('.evo-upload__list-delimiter_error')).toBeTruthy();
    });

});
