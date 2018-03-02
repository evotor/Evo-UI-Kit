import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FirstModule } from "./components/first/first.module";
import { FirstComponent } from "./components/first/first.component";

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      FirstComponent
    ],
    exports: [
      FirstComponent
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