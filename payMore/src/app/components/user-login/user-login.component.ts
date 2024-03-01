import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  usernameInput: string = ""
  passwordInput: string = ""
  errorMessageHidden: boolean = true   
  loginUser() {
    // console.log("Login Attempted!");
    // console.log(this.usernameInput);
    // console.log(this.passwordInput);

    this.authService.loginUser(this.usernameInput, this.passwordInput);
    let successfulLogin: boolean = this.authService.validateLoggedIn();
    if(successfulLogin) {
      console.log("Successful Login!");
      this.errorMessageHidden = true;
      this.router.navigate(['userPortal']);
    } else {
      console.log("Unable to verify. Please try again.");
      this.errorMessageHidden = false;
    }
  }
  toSellerLogin(){
    this.router.navigate(['loginSeller'])
  }

  constructor(private router: Router, private authService: AuthService){

  }
}





  // loginUser(){
  //   this.authService.loginUser(this.usernameInput, this.passwordInput).subscribe((data) => {
  //     sessionStorage.setItem("username", data.username)

  //     let successfulLogin: boolean = this.authService.validateLoggedIn();

  //     if(successfulLogin){
  //       console.log("Success!")
  //     }else {
  //       console.log("Unable to validate Credentials. Please try again.")
  //     }
  //   })

  // }