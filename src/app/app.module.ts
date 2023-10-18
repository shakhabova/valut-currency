import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { OnboardingFaqsComponent } from './onboarding-faqs/onboarding-faqs.component';
import { GeneralFaqsComponent } from './general-faqs/general-faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReferAFriendComponent } from './refer-a-friend/refer-a-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    MoneyTransferComponent,
    HelpPageComponent,
    OnboardingFaqsComponent,
    GeneralFaqsComponent,
    ContactUsComponent,
    ReferAFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
