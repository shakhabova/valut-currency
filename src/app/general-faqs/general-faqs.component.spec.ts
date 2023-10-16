import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFaqsComponent } from './general-faqs.component';

describe('GeneralFaqsComponent', () => {
  let component: GeneralFaqsComponent;
  let fixture: ComponentFixture<GeneralFaqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralFaqsComponent]
    });
    fixture = TestBed.createComponent(GeneralFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
