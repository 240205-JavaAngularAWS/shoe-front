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
  loginUser(){
    this.authService.loginUser(this.usernameInput, this.passwordInput).subscribe((data) => {
      console.log(data);
      sessionStorage.setItem("id", JSON.stringify(data))

      let successfulLogin: boolean = this.authService.validateLoggedIn();

      if(successfulLogin){
        console.log("Success!")
        this.router.navigate(['userPortal'])
      }else {
        console.log("Unable to validate Credentials. Please try again.")
      }
    })

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