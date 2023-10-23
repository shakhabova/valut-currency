import { Component } from '@angular/core';

@Component({
  selector: 'app-onbording',
  templateUrl: './onbording.component.html',
  styleUrls: ['./onbording.component.css']
})
export class OnbordingComponent {
  public currentStep = 1;
  public readonly maxSteps = 3;
  
  public prevStep(): void {
    this.currentStep -= 1;
  }

  public nextStep(): void {
    this.currentStep += 1;
  }

  public setStep(step: number): void {
    this.currentStep = step;
  }
}
