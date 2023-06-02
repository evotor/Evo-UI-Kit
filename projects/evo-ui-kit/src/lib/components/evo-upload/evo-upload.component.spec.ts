import {waitForAsync} from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoUploadComponent} from './evo-upload.component';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';
import {DeclinationPipe} from '../../pipes/declination.pipe';
import {EvoAlertComponent} from '../evo-alert';
import * as mime from 'mime';

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
    uploadComponent: EvoUploadComponent;
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
    recentlyAddedFiles: File[];
    recentlyRemovedIndex: number;
    handleAddFiles(files: File[]) {
        this.recentlyAddedFiles = files;
    }
    handleRemoveFile(index: number) {
        this.recentlyRemovedIndex = index;
    }
}

const createHost = createHostFactory({
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

describe('EvoUpload', () => {
    let host: SpectatorHost<EvoUploadComponent, TestHostComponent>;
    let upload: EvoUploadComponent;
    let hostComponent: TestHostComponent;

    beforeEach(waitForAsync(() => {
        host = createHost(`
        <evo-upload
            [formControl]="filesControl"
            [accept]="accept"
            [loading]="loading"
            [maxFiles]="maxFiles"
            [dropZoneHint]="dropZoneHint"
            [fileSizeLimit]="fileSizeLimit"
            [clickableFiles]="clickableFiles"
            [hideClearButton]="hideClearButton"
            [hideSubmitButton]="hideSubmitButton"
            [earlyValidation]="earlyValidation"
            (addFiles)="handleAddFiles($event)"
            (remove)="handleRemoveFile($event)"
            (submit)="handleAddFiles($event)"
            ></evo-upload>`);
        hostComponent = host.hostComponent;
        upload = hostComponent.uploadComponent;
    }));

    it(`should contain 1 item with file name if 1 file passed`, () => {
        hostComponent.filesControl.setValue([fileFixtures[0]]);
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(1);
        expect(host.query('.evo-upload__list-item .evo-upload__link').innerHTML).toEqual(fileFixtures[0].name);
    });

    it(`should have hint in drop zone`, () => {
        hostComponent.dropZoneHint = dropZoneHint;
        host.detectChanges();
        expect(host.query('.evo-upload__additional-hint')).toBeTruthy();
    });

    it(`should hide buttons`, () => {
        hostComponent.hideClearButton = true;
        hostComponent.hideSubmitButton = true;
        host.detectChanges();
        expect(host.query('.evo-upload__controls button')).toBeFalsy();
    });

    it(`should reset form`, () => {
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        upload.handleResetButtonClick();
        host.detectChanges();
        expect(upload.filesForm.controls.length).toEqual(0);
    });

    it(`items should display specified errors`, () => {
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        const itemsEls = host.queryAll('.evo-upload__list-item');
        expect(upload.filesForm.controls[0].errors.extension).toBeTruthy();
        expect(itemsEls[0].querySelector('.evo-upload__list-delimiter_error')).toBeTruthy();
        expect(upload.filesForm.controls[1].errors.size).toBeTruthy();
        expect(itemsEls[0].querySelector('.evo-upload__list-delimiter_error')).toBeTruthy();
    });

    it(`should display error alert if maxFiles < files qty`, () => {
        hostComponent.maxFiles = 1;
        host.detectChanges();
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        expect(host.query('.evo-alert_danger')).toBeTruthy();
    });

    it(`should display error if file extension doesn't match accept prop`, () => {
        hostComponent.accept = 'txt';
        host.detectChanges();
        hostComponent.filesControl.setValue([fileFixtures[0]]);
        host.detectChanges();
        const itemsEls = host.queryAll('.evo-upload__list-item');
        expect(itemsEls[0].querySelector('.evo-upload__list-delimiter_error')).toBeTruthy();
    });

    it(`should accept files with uppercase extensions`, () => {
        hostComponent.accept = 'png';
        host.detectChanges();
        const fileFixture = {
            size: 1000,
            name: 'pic-1.PNG',
            type: 'image/png',
        };
        hostComponent.filesControl.setValue([fileFixture]);
        host.detectChanges();
        const itemsEls = host.queryAll('.evo-upload__list-item');
        expect(itemsEls[0].querySelector('.evo-upload__list-delimiter_error')).toBeFalsy();
    });

    it(`should contain accepted mime types`, () => {
        const extension = 'docx';
        const mimeType = mime.getType(extension);
        hostComponent.accept = extension;
        host.detectChanges();
        expect(upload.acceptedMimeTypes[0] === mimeType).toBeTruthy();
    });

    describe(`if earlyValidation = true & any passed file invalid`, () => {

        beforeEach(waitForAsync(() => {
            hostComponent.earlyValidation = true;
            hostComponent.maxFiles = 1;
            host.detectChanges();
            hostComponent.filesControl.setValue(fileFixtures);
            host.detectChanges();
        }));

        it(`shouldn't display any items`, () => {
            expect(host.queryAll('.evo-upload__list-item').length).toEqual(0);
        });

        it(`should has errors`, () => {
            expect(upload.filesForm.errors.maxFiles).toBeTruthy();
            expect(upload.filesForm.errors.extension).toBeTruthy();
            expect(upload.filesForm.errors.size).toBeTruthy();
        });

    });

    it(`should display errors list if earlyValidation = true & passed invalid files`, () => {
        hostComponent.earlyValidation = true;
        host.detectChanges();
        hostComponent.filesControl.setValue([fileFixtures[1], fileFixtures[2]]);
        host.detectChanges();
        const alertEl = host.query('.evo-alert_danger');
        expect(alertEl).toBeTruthy();
        expect(alertEl.querySelectorAll('li').length).toEqual(2);
    });

    it(`should emit files if input changed`, () => {
        upload.inputChange(fileFixtures as any);
        host.detectChanges();
        expect(hostComponent.recentlyAddedFiles.length).toEqual(fileFixtures.length);
    });

    it(`should emit files on submit`, () => {
        hostComponent.filesControl.setValue([fileFixtures[1]]);
        host.detectChanges();
        upload.handleSubmitButtonClick();
        expect(hostComponent.recentlyAddedFiles.length).toEqual(1);
    });

    it(`shouldn't emit files if input changed & earlyValidation = true & errors exists`, () => {
        hostComponent.earlyValidation = true;
        host.detectChanges();
        upload.inputChange(fileFixtures as any);
        host.detectChanges();
        expect(hostComponent.recentlyAddedFiles).toBeFalsy();
    });

    it(`should set specified state if disable`, () => {
        const mergeErrorsSpy = spyOn(upload as any, 'mergeControlsErrors').and.callThrough();
        upload.setDisabledState(true);
        host.detectChanges();
        expect(upload.isDisabled).toEqual(true);
        expect(host.query('.evo-upload__wrapper_disabled')).toBeTruthy();
        expect(host.query('.evo-upload__title_disabled')).toBeTruthy();
        expect(host.query('.evo-upload__hint_disabled')).toBeTruthy();
        expect(host.query('.evo-upload__input').getAttribute('disabled')).toEqual('');
        expect(mergeErrorsSpy).toHaveBeenCalledTimes(0);
        upload.setDisabledState(false);
        expect(mergeErrorsSpy).toHaveBeenCalledTimes(1);
    });

    it(`should set specified state if loading`, () => {
        hostComponent.filesControl.setValue([fileFixtures[1]]);
        hostComponent.loading = true;
        host.detectChanges();
        upload.processFiles(fileFixtures as any);
        upload.handleItemRemove(0);
        expect(upload.filesForm.controls.length).toEqual(1);
        expect(upload.loading).toEqual(true);
        expect(host.query('.evo-upload__wrapper_disabled')).toBeTruthy();
        expect(host.query('.evo-upload__title_disabled')).toBeTruthy();
        expect(host.query('.evo-upload__hint_disabled')).toBeTruthy();
        expect(host.query('.evo-upload__input').getAttribute('disabled')).toEqual('');
        const wipeUploadListSpy = spyOn(upload as any, 'wipeUploadList');
        upload.handleResetButtonClick();
        expect(wipeUploadListSpy).toHaveBeenCalledTimes(0);
    });

    it(`should set specified state if drag over or drag leave`, () => {
        const wrapperEl = host.query('.evo-upload__wrapper');
        expect(wrapperEl.classList.contains('evo-upload__wrapper_over')).toBeFalsy();
        wrapperEl.dispatchEvent(new DragEvent('dragover'));
        host.detectChanges();
        expect(wrapperEl.classList.contains('evo-upload__wrapper_over')).toBeTruthy();
        wrapperEl.dispatchEvent(new DragEvent('dragleave'));
        host.detectChanges();
        expect(wrapperEl.classList.contains('evo-upload__wrapper_over')).toBeFalsy();
    });

    it(`should add & emit files on drop event`, () => {
        const wrapperEl = host.query('.evo-upload__wrapper');
        expect(hostComponent.recentlyAddedFiles).toBeFalsy();
        host.detectChanges();
        const dropEvent = new DragEvent('drop');
        Object.defineProperty(dropEvent, 'dataTransfer', {
            value: { files: [fileFixtures[0]] }
        });
        wrapperEl.dispatchEvent(dropEvent);
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(1);
        expect(upload.filesForm.controls.length).toEqual(1);
        expect(hostComponent.recentlyAddedFiles.length).toEqual(1);
    });

    it(`shouldn't add & emit files on drop event if earlyValidation = true & errors exists`, () => {
        const wrapperEl = host.query('.evo-upload__wrapper');
        hostComponent.earlyValidation = true;
        expect(hostComponent.recentlyAddedFiles).toBeFalsy();
        host.detectChanges();
        const dropEvent = new DragEvent('drop');
        Object.defineProperty(dropEvent, 'dataTransfer', {
            value: { files: fileFixtures }
        });
        wrapperEl.dispatchEvent(dropEvent);
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(0);
        expect(upload.filesForm.controls.length).toEqual(0);
        expect(hostComponent.recentlyAddedFiles).toBeFalsy();
    });

    it(`should emit removed item index`, () => {
        hostComponent.filesControl.setValue([fileFixtures[0]]);
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toEqual(1);
        host.click('.evo-upload__button-remove');
        host.detectChanges();
        expect(host.queryAll('.evo-upload__list-item').length).toBeFalsy();
        expect(hostComponent.recentlyRemovedIndex).toEqual(0);
    });

    it(`should throw error if wrong value passed`, () => {
        try {
            hostComponent.filesControl.setValue('invalid value');
            host.detectChanges();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });

});
