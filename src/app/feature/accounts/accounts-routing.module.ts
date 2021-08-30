import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsPanelComponent } from './components/accounts-panel/accounts-panel.component';

const routes: Routes = [
  { path: '', component: AccountsPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
