import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HrefComponent } from './href/href.component';
import { IframeComponent } from './iframe/iframe.component';
import { WebcomponentsComponent } from './webcomponents/webcomponents.component';
import {MicroAppLoaderService} from "./webcomponents/micro-app-loader.service";
import {App5Module} from "../../../app5/src/app/app.module";
import {App6Module} from "../../../app6/src/app/app.module";


import { environment } from '../environments/environment';

console.log(environment)


@NgModule({
  declarations: [
    AppComponent,
    HrefComponent,
    IframeComponent,
    WebcomponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxModule.forRoot(),
    App5Module,
    App6Module

  ],
  providers: [MicroAppLoaderService],
  bootstrap: [WebcomponentsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
