import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomComponentModule } from "./modules/custom-component/custom-component.module";
import { CustomDirectivesModule } from "./modules/custom-directives/custom-directives.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomComponentModule,
    CustomDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
