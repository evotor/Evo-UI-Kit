/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EvoUiKitComponent } from './evo-ui-kit.component';
import { EvoButtonComponent } from './components/evo-button/evo-button.component';
import { EvoCheckboxComponent } from './components/evo-checkbox/evo-checkbox.component';
import { EvoControlErrorComponent } from './components/evo-control-error/evo-control-error.component';
import { EvoInputComponent } from './components/evo-input/evo-input.component';
import { EvoBannerComponent } from './components/evo-banner/evo-banner.component';
import { EvoUiClassDirective } from './directives/evo-ui-class.directive';
const /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
];
const /** @type {?} */ directives = [
    EvoUiClassDirective,
];
const /** @type {?} */ bundle = [
    ...components,
    ...directives
];
export class EvoUiKitModule {
}
EvoUiKitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TextMaskModule,
                ],
                declarations: [
                    EvoUiKitComponent,
                    ...bundle,
                ],
                exports: [
                    EvoUiKitComponent,
                    ...bundle,
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLHVCQUFNLFVBQVUsR0FBUTtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ25CLENBQUM7QUFFRix1QkFBTSxVQUFVLEdBQVE7SUFDdEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRix1QkFBTSxNQUFNLEdBQVE7SUFDbEIsR0FBRyxVQUFVO0lBQ2IsR0FBRyxVQUFVO0NBQ2QsQ0FBQztBQWlCRixNQUFNOzs7WUFmTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLEdBQUcsTUFBTTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixHQUFHLE1BQU07aUJBQ1Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5cbmltcG9ydCB7IEV2b1VpS2l0Q29tcG9uZW50IH0gZnJvbSAnLi9ldm8tdWkta2l0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJ1dHRvbi9ldm8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9DaGVja2JveENvbXBvbmVudCAgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWNoZWNrYm94L2V2by1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jb250cm9sLWVycm9yL2V2by1jb250cm9sLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8taW5wdXQvZXZvLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdm9CYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWJhbm5lci9ldm8tYmFubmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEV2b1VpQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXZvLXVpLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IFtcbiAgRXZvQnV0dG9uQ29tcG9uZW50LFxuICBFdm9DaGVja2JveENvbXBvbmVudCxcbiAgRXZvQ29udHJvbEVycm9yQ29tcG9uZW50LFxuICBFdm9JbnB1dENvbXBvbmVudCxcbiAgRXZvQmFubmVyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgZGlyZWN0aXZlczogYW55ID0gW1xuICBFdm9VaUNsYXNzRGlyZWN0aXZlLFxuXTtcblxuY29uc3QgYnVuZGxlOiBhbnkgPSBbXG4gIC4uLmNvbXBvbmVudHMsXG4gIC4uLmRpcmVjdGl2ZXNcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV2b1VpS2l0Q29tcG9uZW50LFxuICAgIC4uLmJ1bmRsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEV2b1VpS2l0Q29tcG9uZW50LFxuICAgIC4uLmJ1bmRsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdm9VaUtpdE1vZHVsZSB7IH1cbiJdfQ==