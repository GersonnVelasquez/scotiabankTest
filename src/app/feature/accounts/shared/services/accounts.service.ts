import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { account } from 'src/app/core/modelsGlobals/account.model';

@Injectable()
export class AccountsService {

  constructor(private httpService: HttpService) { }

  getAccounts() {
    return this.httpService.doGet(`${environment.backEndUrl}74b07b57-dbcf-4ba9-a764-ccebcb654d06`).pipe(
      map((items: any) => {
        let res: account[] = items.map((item: any) => {
          return new account(item);
        });
        return res
      })
    );
  }

}
