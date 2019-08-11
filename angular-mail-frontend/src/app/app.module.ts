import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxHtmlEditorModule, DxMapModule } from 'devextreme-angular';
import { CustomWysiwygComponent } from './custom-wysiwyg/custom-wysiwyg.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomWysiwygComponent,

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
