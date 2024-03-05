import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent  {
  firstNameRegisterInput: string = '';
  lastNameRegisterInput: string = '';
  userNameRegisterInput: string = '';
  passwordRegisterInput: string = '';
  emailRegisterInput: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  subscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) {}

  registerUser() {
    const userData = {
      firstName: this.firstNameRegisterInput,
      lastName: this.lastNameRegisterInput,
      username: this.userNameRegisterInput,
      password: this.passwordRegisterInput,
      email: this.emailRegisterInput
    };

    this.subscription = this.authService.userRegister(userData).subscribe({
      next: (response) => {
        console.log('User registration successful', response);
        this.successMessage = 'User registration successful!';
      },
      error: (error) => {
        console.log('Error registering user', error);
        this.errorMessage = 'Error registering user';
      }
    });

  }

  ngOnDestroy() {
    if (this. subscription) {
      this.subscription.unsubscribe();
    }
  }

  toSellerRegister() {
    this.router.navigate(['createAccountSeller']);
  }


}