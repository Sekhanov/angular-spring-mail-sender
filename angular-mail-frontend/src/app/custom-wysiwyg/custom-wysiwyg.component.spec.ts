import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWysiwygComponent } from './custom-wysiwyg.component';

describe('CustomWysiwygComponent', () => {
  let component: CustomWysiwygComponent;
  let fixture: ComponentFixture<CustomWysiwygComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWysiwygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
