import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { account } from 'src/app/core/modelsGlobals/account.model';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {

  @Input() account: account;
  @Output() getDetails = new EventEmitter<string>();

  constructor() {
  }

  emitGetDetailsEvent(accountId: string) {
    this.getDetails.emit(accountId);
  }

}
