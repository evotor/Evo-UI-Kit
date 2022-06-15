import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getElementByClassName = <T>(
    fixture: ComponentFixture<any>,
    className: string,
): T => fixture.debugElement.query(By.css(`.${className}`))?.nativeElement as T;

export const getElementBySelector = <T>(
    fixture: ComponentFixture<any>,
    selector: string,
): T => {
    return fixture.debugElement.query(By.css(selector))?.nativeElement as T;
};
