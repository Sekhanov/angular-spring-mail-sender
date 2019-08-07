import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-wisiwyg-editor',
  templateUrl: './wisiwyg-editor.component.html',
  styleUrls: ['./wisiwyg-editor.component.css']
})
export class WisiwygEditorComponent implements OnInit {

  name = 'Angular 6';
  htmlContent = 'mail text';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '30rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    toolbarPosition: 'top',
    defaultFontName: 'Times New Roman',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }



}
