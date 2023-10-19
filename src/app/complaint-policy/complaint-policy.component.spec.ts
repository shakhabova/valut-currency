import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintPolicyComponent } from './complaint-policy.component';

describe('ComplaintPolicyComponent', () => {
  let component: ComplaintPolicyComponent;
  let fixture: ComponentFixture<ComplaintPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintPolicyComponent]
    });
    fixture = TestBed.createComponent(ComplaintPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
