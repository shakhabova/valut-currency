import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishCheckComponent } from './finish-check.component';

describe('FinishCheckComponent', () => {
  let component: FinishCheckComponent;
  let fixture: ComponentFixture<FinishCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishCheckComponent]
    });
    fixture = TestBed.createComponent(FinishCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
