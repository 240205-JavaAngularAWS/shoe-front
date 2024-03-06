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
  
  loginSeller(){
    this.authService.loginSeller(this.usernameInput, this.passwordInput).subscribe((data) => {
      console.log(data);
      sessionStorage.setItem("id", JSON.stringify(data))

      let successfulLogin: boolean = this.authService.validateLoggedIn();

      if(successfulLogin){
        console.log("Success!")
        this.router.navigate(['sellerPortal'])
      }else {
        console.log("Unable to validate Credentials. Please try again.")
      }
    })

  }
  toBuyerLogin(){
    this.router.navigate(['loginUser'])
  }

  constructor(private router: Router, private authService: AuthService){

  }
}
