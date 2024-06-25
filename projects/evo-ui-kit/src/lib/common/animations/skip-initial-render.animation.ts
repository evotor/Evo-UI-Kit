import {transition, trigger} from '@angular/animations';

export const skipInitialRenderAnimation = trigger('skipInitialRender', [transition(':enter', [])]);
