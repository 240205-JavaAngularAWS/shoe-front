import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'seller-login',
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.css'
})
export class SellerLoginComponent {
  usernameInput: string = ""
  passwordInput: string = ""
  errorMessageHidden: boolean = true
  
  loginUser() {
    this.authService.loginUser(this.usernameInput, this.passwordInput);
    let successfulLogin: boolean = this.authService.validateLoggedIn();
    if(successfulLogin) {
      console.log("Successful Login!");
      this.errorMessageHidden = true;
    } else {
      console.log("Unable to verify. Please try again.");
      this.errorMessageHidden = false;
    }
  }
  toBuyerLogin(){
    this.router.navigate(['loginUser'])
  }

  constructor(private router: Router, private authService: AuthService){

  }
}
