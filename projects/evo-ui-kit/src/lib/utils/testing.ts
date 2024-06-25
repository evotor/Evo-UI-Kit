import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

export const getElementByClassName = <T>(
    // eslint-disable-next-line
    fixture: ComponentFixture<any>,
    className: string,
): T => fixture.debugElement.query(By.css(`.${className}`))?.nativeElement as T;

export const getElementBySelector = <T>(
    // eslint-disable-next-line
    fixture: ComponentFixture<any>,
    selector: string,
): T => {
    return fixture.debugElement.query(By.css(selector))?.nativeElement as T;
};
