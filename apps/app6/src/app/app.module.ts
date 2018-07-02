import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {createCustomElement} from '@angular/elements';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
// import {routes} from "./app-routing.module";
import { environment } from '../../../micro-frontends-architecture/src/environments/environment';
import {RouterModule, Routes} from '@angular/router';

  console.log(environment);
const routes: Routes = [

  {
    path: '',
    redirectTo: 'app5',
    pathMatch: 'full'
  },
  {
    path: 'app6',
    children: [
      {
        path: '',
        redirectTo: 'c3',
        pathMatch: 'full'
      }, {
        path: 'c3',
        component: C3Component,
      }, {
        path: 'c4',
        component: C4Component,


      }
    ]
  }


];

@NgModule({
  declarations: [AppComponent, C3Component, C4Component],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    environment.production ? RouterModule.forChild(routes) : RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]

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
