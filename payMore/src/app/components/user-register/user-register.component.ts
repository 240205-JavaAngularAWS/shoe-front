import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent {
  toSellerLogin() {
    this.router.navigate(['loginSeller']);
  }

  constructor(private router: Router) {}
}