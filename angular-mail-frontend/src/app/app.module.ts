import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { WisiwygEditorComponent } from './wisiwyg-editor/wisiwyg-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule],
  declarations: [
    AppComponent,
    WisiwygEditorComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
