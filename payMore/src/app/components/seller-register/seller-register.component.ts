import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-seller-register',
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
  errorMessageHidden: boolean = true;
  registerSeller() {
    this.authService.sellerRegister(
      this.companyRegisterInput,
      this.userNameRegisterInput,
      this.passwordRegisterInput,
      this.emailRegisterInput,
      this.addressRegisterInput,
      this.cityRegisterInput,
      this.stateRegisterInput,
      this.zipCodeRegisterInput
    );
    let successfulRegister: boolean = this.authService.validateRegisterSeller();
    if (successfulRegister) {
      console.log('Successful Register!');
      this.errorMessageHidden = true;
    } else {
      console.log('Missing Fields. Please try again.');
      this.errorMessageHidden = false;
    }
  }
  toUserRegister() {
    this.router.navigate(['createAccount']);
  }
  constructor(private router: Router, private authService: AuthService) {}
}
