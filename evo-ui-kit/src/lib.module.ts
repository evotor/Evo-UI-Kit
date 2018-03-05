import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from '@angular/core';
import {EVOButtonComponent} from "./components/button/evo-button.component";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      EVOButtonComponent
    ],
    exports: [
      EVOButtonComponent
    ]
  })
  export class EvoUIKitModule {

    public static forRoot(): ModuleWithProviders {

      return {
        ngModule: EvoUIKitModule,
        providers: [

        ]
      };
    }
  }
