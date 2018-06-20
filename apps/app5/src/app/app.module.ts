import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations: [AppComponent, C1Component, C2Component],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class App5Module {

  constructor(private injector: Injector) {
    const MicroAppElement = createCustomElement(
      AppComponent, {injector: this.injector});
    customElements.define('app-5', MicroAppElement);
  }
}
