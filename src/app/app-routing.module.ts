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
  { path: 'home-page', component: HomePageComponent, title: 'Money Transfer to Albania | Send Money Online' },
  { path: 'money-transfer', component: MoneyTransferComponent, title: 'Money Transfer to Albania | Free Money Transfer to Albania' },
  { path: 'help-page', component: HelpPageComponent, title: 'Need help? We are here to support you at every step' },
  { path: 'onboarding-faqs', component: OnboardingFaqsComponent, title: 'What is KYC? Know Your Customer'},
  { path: 'general-faqs', component: GeneralFaqsComponent, title: 'Free Transfer to Albania | Send Money to Albania' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us | Smart way to Transfer Money to Albania'},
  { path: 'refer-a-friend', component: ReferAFriendComponent, title: 'Refer A Friend | Valut'},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent, title: 'Terms and Conditions | Valut'},
  { path: 'privacy-policy', component: PrivacyPolicyComponent,title: 'Privacy Policy | Valut'},
  { path: 'complaint-policy', component: ComplaintPolicyComponent, title: 'Complaint Policy | Valut '},
  { path: 'onbording', component: OnbordingComponent, title: 'How to scan your photo ID on our app?'},
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
