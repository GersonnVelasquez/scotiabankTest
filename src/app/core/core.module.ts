import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { MyErrorHandler } from './error-handler/error.error-handler';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    HttpService,
    AuthService,
    { provide: ErrorHandler, useClass: MyErrorHandler },
  ]
})
export class CoreModule { }
