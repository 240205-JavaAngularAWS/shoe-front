import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { IAddress } from '../../interfaces/IAddress';

@Component({
  selector: 'seller-register',
  templateUrl: './seller-register.component.html',
  styleUrl: './seller-register.component.css',
})
export class SellerRegisterComponent {
  companyRegisterInput: string = '';
  userNameRegisterInput: string = '';
  passwordRegisterInput: string = '';
  emailRegisterInput: string = '';
  addressRegisterInput: string = '';
  cityRegisterInput: string = '';
  stateRegisterInput: string = '';
  zipCodeRegisterInput: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  subscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) {}

  registerSeller() {
    const sellerData = {
      companyName: this.companyRegisterInput,
      username: this.userNameRegisterInput,
      password: this.passwordRegisterInput,
      email: this.emailRegisterInput,
      address: {
        addressText: this.addressRegisterInput,
        city: this.cityRegisterInput,
        state: this.stateRegisterInput,
        zipCode: this.zipCodeRegisterInput
      } as IAddress,
    };

    this.subscription = this.authService.sellerRegister(sellerData).subscribe({
      next: (response) => {
        console.log('Seller registration successful', response);
        this.successMessage = 'Seller registration successful!';
      },
      error: (error) => {
        console.log('Error registering seller', error);
        this.errorMessage = 'Error registering seller';
      }
  });
}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }
  toUserRegister() {
    this.router.navigate(['createAccount']);
  }

}
