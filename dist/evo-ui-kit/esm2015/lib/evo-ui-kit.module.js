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
import { EvoUiClassDirective } from './directives/evo-ui-class.directive';
import { EvoCardComponent } from './components/evo-card/evo-card.component';
import { EvoListComponent } from './components/evo-list/evo-list.component';
const /** @type {?} */ components = [
    EvoButtonComponent,
    EvoCheckboxComponent,
    EvoControlErrorComponent,
    EvoInputComponent,
    EvoBannerComponent,
    EvoCardComponent,
    EvoListComponent,
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
                    ...bundle,
                ],
                exports: [
                    ...bundle,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZvLXVpLWtpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldm8tdWkta2l0LyIsInNvdXJjZXMiOlsibGliL2V2by11aS1raXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRyxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFLHVCQUFNLFVBQVUsR0FBUTtJQUN0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDakIsQ0FBQztBQUVGLHVCQUFNLFVBQVUsR0FBUTtJQUN0QixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGLHVCQUFNLE1BQU0sR0FBUTtJQUNsQixHQUFHLFVBQVU7SUFDYixHQUFHLFVBQVU7Q0FDZCxDQUFDO0FBZ0JGLE1BQU07OztZQWRMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsTUFBTTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxNQUFNO2lCQUNWO2dCQUNELE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcblxuaW1wb3J0IHsgRXZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1idXR0b24vZXZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQ2hlY2tib3hDb21wb25lbnQgIH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1jaGVja2JveC9ldm8tY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY29udHJvbC1lcnJvci9ldm8tY29udHJvbC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZvLWlucHV0L2V2by1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2by1iYW5uZXIvZXZvLWJhbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFdm9VaUNsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2V2by11aS1jbGFzcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXZvQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tY2FyZC9ldm8tY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZvTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldm8tbGlzdC9ldm8tbGlzdC5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnkgPSBbXG4gIEV2b0J1dHRvbkNvbXBvbmVudCxcbiAgRXZvQ2hlY2tib3hDb21wb25lbnQsXG4gIEV2b0NvbnRyb2xFcnJvckNvbXBvbmVudCxcbiAgRXZvSW5wdXRDb21wb25lbnQsXG4gIEV2b0Jhbm5lckNvbXBvbmVudCxcbiAgRXZvQ2FyZENvbXBvbmVudCxcbiAgRXZvTGlzdENvbXBvbmVudCxcbl07XG5cbmNvbnN0IGRpcmVjdGl2ZXM6IGFueSA9IFtcbiAgRXZvVWlDbGFzc0RpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IGJ1bmRsZTogYW55ID0gW1xuICAuLi5jb21wb25lbnRzLFxuICAuLi5kaXJlY3RpdmVzXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5idW5kbGUsXG4gIF0sXG4gIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIEV2b1VpS2l0TW9kdWxlIHsgfVxuIl19