import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  toSellerLogin(){
    this.router.navigate(['loginSeller'])
  }

  constructor(private router: Router){

  }
}
