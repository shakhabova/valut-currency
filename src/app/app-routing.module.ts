import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { OnboardingFaqsComponent } from './onboarding-faqs/onboarding-faqs.component';
import { GeneralFaqsComponent } from './general-faqs/general-faqs.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'help-page', component: HelpPageComponent },
  { path: 'onboarding-faqs', component: OnboardingFaqsComponent},
  { path: 'general-faqs', component: GeneralFaqsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
