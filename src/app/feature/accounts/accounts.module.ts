import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsPanelComponent } from './components/accounts-panel/accounts-panel.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountsService } from './shared/services/accounts.service';


@NgModule({
  declarations: [
    AccountsPanelComponent,
    AccountCardComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ], providers: [
    AccountsService
  ]
})
export class AccountsModule { }
