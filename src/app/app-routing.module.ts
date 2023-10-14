import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { OnboardingFaqsComponent } from './onboarding-faqs/onboarding-faqs.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'help-page', component: HelpPageComponent },
  { path: 'onboarding-faqs', component: OnboardingFaqsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
