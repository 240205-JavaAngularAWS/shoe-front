import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegisterComponent } from './components/seller-register/seller-register.component';

const routes: Routes = [
  {path: 'loginUser', component: UserLoginComponent},
  {path: 'createAccount', component: UserRegisterComponent},
  {path: 'loginSeller', component: SellerLoginComponent},
  {path: 'createAccountSeller', component: SellerRegisterComponent},
  {path: '', pathMatch: 'full', redirectTo:'loginUser'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
