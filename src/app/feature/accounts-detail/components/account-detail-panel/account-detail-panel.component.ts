import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from '../../shared/services/account-details.service';
import { map } from 'rxjs/operators';
import { AccountDetails } from 'src/app/core/modelsGlobals/account-details.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail-panel',
  templateUrl: './account-detail-panel.component.html',
  styleUrls: ['./account-detail-panel.component.scss']
})
export class AccountDetailPanelComponent implements OnInit {

  accounsDetails: AccountDetails[];
  noCuenta: string;
  constructor(private accountDetailsService: AccountDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let id = params.get('id');
      if (id) {
        this.noCuenta = id;
        this.getAccountDetails(id);
      }
    });
  }


  getAccountDetails(accountId: string) {
    this.accountDetailsService.getAccountDetails(accountId).pipe(
      map(data => {
        return data.sort((a, b) => Number(a.fechaTransaccion) - Number(b.fechaTransaccion));
      })
    ).subscribe(data => {
      this.accounsDetails = data;
    });
  }

}
