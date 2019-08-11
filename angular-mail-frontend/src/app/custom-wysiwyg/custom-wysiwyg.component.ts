import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-wysiwyg',
  templateUrl: './custom-wysiwyg.component.html',
  styleUrls: ['./custom-wysiwyg.component.scss']
})
export class CustomWysiwygComponent implements OnInit {

  wysiwygValue: string;

  constructor() { }

  ngOnInit() {

  }
  
  valueChange(value: string) {
    this.wysiwygValue = value;
  }

}
