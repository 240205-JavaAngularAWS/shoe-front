import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [
  {path: 'loginUser', component: UserLoginComponent},
  {path: 'createAccount', component: UserRegisterComponent},
  {path: '', pathMatch: 'full', redirectTo:'loginUser'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
