import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../modelsGlobals/customer.model';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {

  isSessionActive$ = new BehaviorSubject<boolean>(false);
  customerInfo$ = new BehaviorSubject<Customer | null>(null);

  constructor(private httpService: HttpService) {
    this.checkSessionActive();
  }

  checkSessionActive() {
    let token = localStorage.getItem('token');
    if (token) {
      this.isSessionActive$.next(true);
      this.getCustomerInfo();
    }
  }

  logIn() {
    localStorage.setItem('token', 'asdabe1231fvsdr234');
    this.isSessionActive$.next(true);
    this.getCustomerInfo();
  }

  logOut() {
    localStorage.removeItem('token');
    this.isSessionActive$.next(false);
    this.customerInfo$.next(null);
  }

  getCustomerInfo() {
    this.httpService.doGet(`${environment.backEndUrl}c723bce2-5adb-4496-ade7-0347a696aba2`).pipe(
      map((item: any) => {
        let res: Customer = new Customer(item);
        return res
      })
    ).subscribe(data => {
      this.customerInfo$.next(data);
    })
  }

}
