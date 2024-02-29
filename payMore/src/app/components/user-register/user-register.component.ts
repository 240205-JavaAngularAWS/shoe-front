import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent {
  usernameInput: string = '';
  passwordInput: string = '';
  errorMessageHidden: boolean = true;
  RegisterUser() {

    this.authService.userRegister(this.usernameInput, this.passwordInput);
    let successfulLogin: boolean = this.authService.validateLoggedIn();
    if (successfulLogin) {
      console.log('Successful Register!');
      this.errorMessageHidden = true;
    } else {
      console.log('Missing Fields. Please try again.');
      this.errorMessageHidden = false;
    }
  }
  toSellerRegister() {
    this.router.navigate(['createAccountSeller']);
  }

  constructor(private router: Router, private authService: AuthService) {}
}