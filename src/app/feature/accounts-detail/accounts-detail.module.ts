import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsDetailRoutingModule } from './accounts-detail-routing.module';
import { AccountDetailPanelComponent } from './components/account-detail-panel/account-detail-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountDetailsService } from './shared/services/account-details.service';


@NgModule({
  declarations: [
    AccountDetailPanelComponent
  ],
  imports: [
    CommonModule,
    AccountsDetailRoutingModule,
    SharedModule
  ],
  providers: [
    AccountDetailsService
  ]
})
export class AccountsDetailModule { }
