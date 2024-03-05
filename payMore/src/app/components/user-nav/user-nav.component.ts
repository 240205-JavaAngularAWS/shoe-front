import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'userNav',
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {

  toHome(){
    this.router.navigate([''])
  }

  toOrderHistory(){
    this.router.navigate(['orders'])
  }

  toLogin(){
    this.router.navigate(['loginUser']);
    sessionStorage.clear();
  }

  toCart() {
    this.router.navigate(['cart']);
  }

  constructor(private router: Router){

  }
}
