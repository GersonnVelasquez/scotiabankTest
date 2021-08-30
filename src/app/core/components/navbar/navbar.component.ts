import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../modelsGlobals/customer.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showNav = false;
  customer: Customer;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isSessionActive$.subscribe(isActive => {
      if (isActive) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    });

    this.getCustomerInfo();

  }

  logOut() {
    this.auth.logOut();
    this.router.navigateByUrl('/login')
  }

  getCustomerInfo() {
    this.auth.customerInfo$.subscribe(customer => {
      if (customer)
        this.customer = customer;
    });
  }

}
