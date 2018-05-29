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
var /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUcsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUxRSxxQkFBTSxVQUFVLEdBQVE7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNuQixDQUFDO0FBRUYscUJBQU0sVUFBVSxHQUFRO0lBQ3RCLG1CQUFtQjtDQUNwQixDQUFDO0FBRUYscUJBQU0sTUFBTSxvQkFDUCxVQUFVLEVBQ1YsVUFBVSxDQUNkLENBQUM7Ozs7O2dCQUVELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxtQkFDUCxNQUFNLENBQ1Y7b0JBQ0QsT0FBTyxtQkFDRixNQUFNLENBQ1Y7b0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7aUJBQ3BDOzt5QkEzQ0Q7O1NBNENhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuXG5pbXBvcnQgeyBFdm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9DaGVja2JveENvbXBvbmVudCAgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJhbm5lci9ldm8tYmFubmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEV2b1VpQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IFtcbiAgRXZvQnV0dG9uQ29tcG9uZW50LFxuICBFdm9DaGVja2JveENvbXBvbmVudCxcbiAgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50LFxuICBFdm9JbnB1dENvbXBvbmVudCxcbiAgRXZvQmFubmVyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRNb2R1bGUgeyB9XG4iXX0=