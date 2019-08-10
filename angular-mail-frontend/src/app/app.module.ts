import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxHtmlEditorModule, DxMapModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxHtmlEditorModule,
    DxMapModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
