import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EvoTooltipComponent } from './evo-tooltip.component';
import { EvoTooltipService } from './services/evo-tooltip.service';
import { of } from 'rxjs';

describe('EvoTooltipComponent', () => {
    let component: EvoTooltipComponent;
    let fixture: ComponentFixture<EvoTooltipComponent>;
    let tooltipService: EvoTooltipService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EvoTooltipComponent],
            providers: [EvoTooltipService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoTooltipComponent);
        component = fixture.componentInstance;
        tooltipService = TestBed.inject(EvoTooltipService);
    });

    it('should set position and styles from tooltip service', fakeAsync(() => {
        const position = { top: '10px', left: '20px' };
        const styles = { color: 'red' };
        let positionResult: any;
        let stylesResult: any;

        spyOn(tooltipService.position$, 'subscribe').and.returnValue(of(position).subscribe((result) => {
            positionResult = result;
        }));
        spyOn(tooltipService.styles$, 'subscribe').and.returnValue(of(styles).subscribe((result) => {
            stylesResult = result;
        }));

        fixture.detectChanges();
        tick();

        expect(positionResult).toEqual(position);
        expect(stylesResult).toEqual(styles);
    }));

    it('should set string content from tooltip service', fakeAsync(() => {
        const content = 'Tooltip content';
        let contentResult: any;

        spyOn(tooltipService.stringContent$, 'subscribe').and.returnValue(of(content).subscribe((result) => {
            contentResult = result;
        }));

        fixture.detectChanges();
        tick();

        expect(contentResult).toEqual(content);
    }));

    it('should set template content from tooltip service', fakeAsync(() => {
        const content = 'Tooltip content';
        let contentResult: any;

        spyOn(tooltipService.templateContent$, 'subscribe').and.returnValue(of(content).subscribe((result) => {
            contentResult = result;
        }));

        fixture.detectChanges();
        tick();

        expect(contentResult).toEqual(content);
    }));

    it('should set fadeIn to false on ngOnDestroy', () => {
        component.ngOnDestroy();

        expect(component.fadeIn).toBe(false);
    });
});
