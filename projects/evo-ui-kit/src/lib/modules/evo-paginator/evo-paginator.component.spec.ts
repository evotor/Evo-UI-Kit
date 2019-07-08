import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, EventEmitter, ViewChild } from '@angular/core';
import { EvoPaginatorModule } from './evo-paginator.module';
import { PageEvent, EvoPaginatorComponent } from './evo-paginator.component';
import { By } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line:component-selector
  selector: 'app-host',
  template: `
    <evo-paginator
      [length]="length"
      [pageIndex]="pageIndex"
      [pageSize]="pageSize"
      (page)="page.emit($event)"
    ></evo-paginator>`,
})
class HostComponent {
  @ViewChild(EvoPaginatorComponent) component: EvoPaginatorComponent;
  page = new EventEmitter<PageEvent>();

  pageSize: number;
  pageIndex: number;
  length: number;
}

describe('EvoPaginatorComponent', () => {
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  const selectPages = By.css('.page');
  const selectPrevBtn = By.css('.previous');
  const selectNextBtn = By.css('.next');

  const PAGE_SIZE = 5;
  const LENGTH = 21;
  const EXPECTED_PAGES_COUNT = 5;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvoPaginatorModule],
      declarations: [HostComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;

    hostComponent.pageSize = PAGE_SIZE;
    hostComponent.length = LENGTH;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should calculate pages bases on pageSize and length', () => {
    expect(fixture.debugElement.queryAll(selectPages).length).toBe(EXPECTED_PAGES_COUNT);
  });

  it('should properly calculate pages when length is dividable to page size', () => {
    hostComponent.pageSize = 10;
    hostComponent.length = 20;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(selectPages).length).toBe(2);
  });

  it('should have pages label 1-based', () => {
    const pageElement = fixture.debugElement.query(selectPages).nativeElement as HTMLDivElement;
    expect(pageElement.innerText).toBe('1');
  });

  it('should highlight active page', () => {
    hostComponent.pageIndex = 1;

    fixture.detectChanges();
    const pageElements = fixture.debugElement.queryAll(selectPages);

    expect((pageElements[0].nativeElement as HTMLElement).classList.contains('active')).toBeFalsy();
    expect((pageElements[1].nativeElement as HTMLElement).classList.contains('active')).toBeTruthy();
  });


  describe('Navigation buttons', () => {
    let prevBtn: HTMLElement;
    let nextBtn: HTMLElement;

    beforeEach(() => {
      prevBtn = fixture.debugElement.query(selectPrevBtn).nativeElement;
      nextBtn = fixture.debugElement.query(selectNextBtn).nativeElement;
    });

    it('prev button should be hidden when first page is active', () => {
      hostComponent.pageIndex = 0;
      fixture.detectChanges();
      expect(prevBtn.classList.contains('hidden')).toBeTruthy();
    });

    it('prev button should be visible when not first page is active', () => {
      hostComponent.pageIndex = 1;


      fixture.detectChanges();
      expect(prevBtn.classList.contains('hidden')).toBeFalsy();
    });

    it('next button should be hidden when last page is active', () => {
      hostComponent.pageSize = 5;
      hostComponent.length = 21;
      hostComponent.pageIndex = 4;

      fixture.detectChanges();

      expect(nextBtn.classList.contains('hidden')).toBeTruthy();

      hostComponent.pageSize = 10;
      hostComponent.length = 20;
      hostComponent.pageIndex = 1;
      fixture.detectChanges();

      expect(nextBtn.classList.contains('hidden')).toBeTruthy();
    });

    it('next button should be visible when not first page is active', () => {
      hostComponent.pageIndex = 1;
      fixture.detectChanges();
      expect(nextBtn.classList.contains('hidden')).toBeFalsy();
    });
  });

  describe('Output Events', () => {
    let eventHandler: jasmine.Spy;
    beforeEach(() => {
      eventHandler = jasmine.createSpy('eventHandler');
      hostComponent.page.subscribe(eventHandler);
    });

    it('should emit event when click on any page', () => {
      const NEW_PAGE = 3;
      hostComponent.pageIndex = 1;
      fixture.detectChanges();

      const pages = fixture.debugElement.queryAll(selectPages);
      pages[NEW_PAGE].triggerEventHandler('click', {});

      expect(eventHandler).toHaveBeenCalledTimes(1);
      expect(eventHandler).toHaveBeenCalledWith({
        length: LENGTH,
        pageIndex: NEW_PAGE,
        pageSize: PAGE_SIZE,
        previousPageIndex: 1,
      });
    });
    it('should NOT emit event when click on active page', () => {
      hostComponent.pageIndex = 1;
      fixture.detectChanges();

      const pages = fixture.debugElement.queryAll(selectPages);
      pages[1].triggerEventHandler('click', {});

      expect(eventHandler).not.toHaveBeenCalled();
    });
    it('should emit event when click on previous', () => {
      hostComponent.pageIndex = 1;
      fixture.detectChanges();

      const btn = fixture.debugElement.query(selectPrevBtn);
      btn.triggerEventHandler('click', {});

      expect(eventHandler).toHaveBeenCalledWith(jasmine.objectContaining({
        pageIndex: 0,
        previousPageIndex: 1,
      }));
    });
    it('should emit event when click on next', () => {
      hostComponent.pageIndex = 1;
      fixture.detectChanges();

      const btn = fixture.debugElement.query(selectNextBtn);
      btn.triggerEventHandler('click', {});

      expect(eventHandler).toHaveBeenCalledWith(jasmine.objectContaining({
        pageIndex: 2,
        previousPageIndex: 1,
      }));
    });
  });
});
