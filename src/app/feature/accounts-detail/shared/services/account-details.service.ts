import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AccountDetails } from 'src/app/core/modelsGlobals/account-details.model';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AccountDetailsService {
  constructor(private httpService: HttpService) { }

  getAccountDetails(accountId: string) {
    return this.httpService.doGet(`${environment.backEndUrl}f1ba8d4a-5399-44b9-96eb-d0c0575f11f8?id=${accountId}`).pipe(
      map((items: any) => {
        let res: AccountDetails[] = items.map((item: any) => {
          return new AccountDetails(item);
        });
        return res
      })
    );
  }
}
