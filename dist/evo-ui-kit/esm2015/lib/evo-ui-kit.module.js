/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EvoButtonComponent } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';
import { EvoBannerComponent } from './components/evo-banner/evo-banner.component';
import { EvoSidebarComponent } from './components/evo-sidebar/evo-sidebar.component';
import { EvoSidebarService } from './components/evo-sidebar/evo-sidebar.service';
export { EvoSidebarService } from './components/evo-sidebar/evo-sidebar.service';
import { EvoUiClassDirective } from './directives/evo-ui-class.directive';
const /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
    EvoSidebarComponent,
];
const /** @type {?} */ directives = [
    EvoUiClassDirective,
];
const /** @type {?} */ bundle = [
    ...components,
    ...directives
];
export class EvoUiKitModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: EvoUiKitModule,
            providers: [
                EvoSidebarService,
            ]
        };
    }
}
EvoUiKitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TextMaskModule,
                ],
                declarations: [
                    ...bundle,
                ],
                exports: [
                    ...bundle,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUcsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUxRSx1QkFBTSxVQUFVLEdBQVE7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLHVCQUFNLFVBQVUsR0FBUTtJQUN0QixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLHVCQUFNLE1BQU0sR0FBUTtJQUNsQixHQUFHLFVBQVU7SUFDYixHQUFHLFVBQVU7Q0FDZCxDQUFDO0FBZ0JGLE1BQU07Ozs7SUFDSixNQUFNLENBQUMsT0FBTztRQUNaLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO0tBQ0g7OztZQXRCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLE1BQU07aUJBQ1Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsTUFBTTtpQkFDVjtnQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5cbmltcG9ydCB7IEV2b0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYnV0dG9uL2V2by1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NoZWNrYm94Q29tcG9uZW50ICB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2hlY2tib3gvZXZvLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9Db250cm9sRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNvbnRyb2wtZXJyb3IvZXZvLWNvbnRyb2wtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0lucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1pbnB1dC9ldm8taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0Jhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tYmFubmVyL2V2by1iYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1NpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2b1NpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1zaWRlYmFyL2V2by1zaWRlYmFyLnNlcnZpY2UnO1xuZXhwb3J0IHsgRXZvU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLXNpZGViYXIvZXZvLXNpZGViYXIuc2VydmljZSc7XG5cbmltcG9ydCB7IEV2b1VpQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IFtcbiAgRXZvQnV0dG9uQ29tcG9uZW50LFxuICBFdm9DaGVja2JveENvbXBvbmVudCxcbiAgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50LFxuICBFdm9JbnB1dENvbXBvbmVudCxcbiAgRXZvQmFubmVyQ29tcG9uZW50LFxuICBFdm9TaWRlYmFyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgRXZvVWlLaXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV2b1VpS2l0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEV2b1NpZGViYXJTZXJ2aWNlLFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuXG4iXX0=