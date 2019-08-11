import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeToastsComponent } from './prime-toasts.component';

describe('PrimeToastsComponent', () => {
  let component: PrimeToastsComponent;
  let fixture: ComponentFixture<PrimeToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeToastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
