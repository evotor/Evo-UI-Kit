/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EvoButtonComponent } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';
import { EvoBannerComponent } from './components/evo-banner/evo-banner.component';
import { EvoUiClassDirective } from './directives/evo-ui-class.directive';
import { EvoCardComponent } from './components/evo-card/evo-card.component';
import { EvoListComponent } from './components/evo-list/evo-list.component';
var /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
    EvoCardComponent,
    EvoListComponent,
];
var /** @type {?} */ directives = [
    EvoUiClassDirective,
];
var /** @type {?} */ bundle = tslib_1.__spread(components, directives);
var EvoUiKitModule = /** @class */ (function () {
    function EvoUiKitModule() {
    }
    EvoUiKitModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TextMaskModule,
                    ],
                    declarations: tslib_1.__spread(bundle),
                    exports: tslib_1.__spread(bundle),
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    return EvoUiKitModule;
}());
export { EvoUiKitModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUcsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU1RSxxQkFBTSxVQUFVLEdBQVE7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0NBQ2pCLENBQUM7QUFFRixxQkFBTSxVQUFVLEdBQVE7SUFDdEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRixxQkFBTSxNQUFNLG9CQUNQLFVBQVUsRUFDVixVQUFVLENBQ2QsQ0FBQzs7Ozs7Z0JBRUQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYztxQkFDZjtvQkFDRCxZQUFZLG1CQUNQLE1BQU0sQ0FDVjtvQkFDRCxPQUFPLG1CQUNGLE1BQU0sQ0FDVjtvQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtpQkFDcEM7O3lCQS9DRDs7U0FnRGEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5cbmltcG9ydCB7IEV2b0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NoZWNrYm94Q29tcG9uZW50ICB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2hlY2tib3gvZXZvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRXZvVWlDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ldm8tdWktY2xhc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2b0NhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNhcmQvZXZvLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWxpc3QvZXZvLWxpc3QuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55ID0gW1xuICBFdm9CdXR0b25Db21wb25lbnQsXG4gIEV2b0NoZWNrYm94Q29tcG9uZW50LFxuICBFdm9Db250cm9sRXJyb3JDb21wb25lbnQsXG4gIEV2b0lucHV0Q29tcG9uZW50LFxuICBFdm9CYW5uZXJDb21wb25lbnQsXG4gIEV2b0NhcmRDb21wb25lbnQsXG4gIEV2b0xpc3RDb21wb25lbnQsXG5dO1xuXG5jb25zdCBkaXJlY3RpdmVzOiBhbnkgPSBbXG4gIEV2b1VpQ2xhc3NEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBidW5kbGU6IGFueSA9IFtcbiAgLi4uY29tcG9uZW50cyxcbiAgLi4uZGlyZWN0aXZlc1xuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uYnVuZGxlLFxuICBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdE1vZHVsZSB7IH1cbiJdfQ==