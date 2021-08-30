import { Component, OnInit } from '@angular/core';
import { account } from 'src/app/core/modelsGlobals/account.model';
import { AccountsService } from '../../shared/services/accounts.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-panel',
  templateUrl: './accounts-panel.component.html',
  styleUrls: ['./accounts-panel.component.scss']
})
export class AccountsPanelComponent implements OnInit {
  accounts: account[];

  constructor(private accountsService: AccountsService, private router: Router) {
    this.accounts = [];
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountsService.getAccounts().pipe(
      map(data => {
        return data.sort((a, b) => a.sortOrder - b.sortOrder);
      })
    )
      .subscribe(data => {
        this.accounts = data;
      });
  }

  goToDetails(accountId: string) {
    this.router.navigate(["./detalle"], { queryParams: { id: accountId } })
  }
}
