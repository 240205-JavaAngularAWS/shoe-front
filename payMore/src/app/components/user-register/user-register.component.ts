import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent {
  firstNameRegisterInput: string = '';
  lastNameRegisterInput: string = '';
  userNameRegisterInput: string = '';
  passwordRegisterInput: string = '';
  emailRegisterInput: string = '';
  errorMessageHidden: boolean = true;
  registerUser() {
    this.authService.userRegister(
      this.firstNameRegisterInput,
      this.lastNameRegisterInput,
      this.userNameRegisterInput,
      this.passwordRegisterInput,
      this.emailRegisterInput
    );
    let successfulRegister: boolean = this.authService.validateRegisterUser();
    if (successfulRegister) {
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