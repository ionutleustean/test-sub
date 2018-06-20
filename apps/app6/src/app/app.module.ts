import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {createCustomElement} from "@angular/elements";
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, C3Component, C4Component],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App6Module {
  constructor(private injector: Injector) {
    const MicroAppElement = createCustomElement(
      AppComponent, {injector: this.injector});

    customElements.define('app-6', MicroAppElement);
  }

  // ngDoBootstrap() {
  //   const MicroAppElement = createCustomElement(
  //     AppComponent, {injector: this.injector});
  //
  //   customElements.define('app-6', MicroAppElement);
  // }
}
