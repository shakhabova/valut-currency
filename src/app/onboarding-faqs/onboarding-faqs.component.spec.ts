import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFaqsComponent } from './onboarding-faqs.component';

describe('OnboardingFaqsComponent', () => {
  let component: OnboardingFaqsComponent;
  let fixture: ComponentFixture<OnboardingFaqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingFaqsComponent]
    });
    fixture = TestBed.createComponent(OnboardingFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
