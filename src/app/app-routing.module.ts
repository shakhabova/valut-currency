import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

const routes: Routes = [
 { path: '', component: HomePageComponent  },
 { path: 'money-transfer', component: MoneyTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
