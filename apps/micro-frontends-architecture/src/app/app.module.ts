import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HrefComponent } from './href/href.component';
import { IframeComponent } from './iframe/iframe.component';
import { WebcomponentsComponent } from './webcomponents/webcomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    HrefComponent,
    IframeComponent,
    WebcomponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
