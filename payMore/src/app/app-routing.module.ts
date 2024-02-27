import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path: 'loginUser', component: UserLoginComponent},
  // {path: 'loginSeller', component: LoginSellerComponent},
  // {path: 'createAccount', component: CreateAccountComponent},
  {path: '', pathMatch: 'full', redirectTo:'loginUser'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
