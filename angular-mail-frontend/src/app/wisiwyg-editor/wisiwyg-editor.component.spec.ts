import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisiwygEditorComponent } from './wisiwyg-editor.component';

describe('WisiwygEditorComponent', () => {
  let component: WisiwygEditorComponent;
  let fixture: ComponentFixture<WisiwygEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisiwygEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
