import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevenessCheckComponent } from './leveness-check.component';

describe('LevenessCheckComponent', () => {
  let component: LevenessCheckComponent;
  let fixture: ComponentFixture<LevenessCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevenessCheckComponent]
    });
    fixture = TestBed.createComponent(LevenessCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
