import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isSessionActive$.subscribe(isActive => {
      if (isActive) {
        this.router.navigateByUrl('/cuentas');
      }
    })
  }


  logIn() {
    this.auth.logIn();
  }

}
