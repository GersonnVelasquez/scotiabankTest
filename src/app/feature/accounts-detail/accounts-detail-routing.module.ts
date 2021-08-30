import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailPanelComponent } from './components/account-detail-panel/account-detail-panel.component';

const routes: Routes = [
  { path: '', component: AccountDetailPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsDetailRoutingModule { }
