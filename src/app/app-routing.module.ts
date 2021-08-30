import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
  { path: 'cuentas', loadChildren: () => import('./feature/accounts/accounts.module').then(m => m.AccountsModule), canActivate: [AuthGuard] },
  { path: 'detalle', loadChildren: () => import('./feature/accounts-detail/accounts-detail.module').then(m => m.AccountsDetailModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
