import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { OnboardingFaqsComponent } from './onboarding-faqs/onboarding-faqs.component';
import { GeneralFaqsComponent } from './general-faqs/general-faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReferAFriendComponent } from './refer-a-friend/refer-a-friend.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ComplaintPolicyComponent } from './complaint-policy/complaint-policy.component';
import { OnbordingComponent } from './onbording/onbording.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'help-page', component: HelpPageComponent },
  { path: 'onboarding-faqs', component: OnboardingFaqsComponent},
  { path: 'general-faqs', component: GeneralFaqsComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'refer-a-friend', component: ReferAFriendComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'complaint-policy', component: ComplaintPolicyComponent},
  { path: 'onbording', component: OnbordingComponent},
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
