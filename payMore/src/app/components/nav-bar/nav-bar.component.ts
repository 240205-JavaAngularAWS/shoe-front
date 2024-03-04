import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  toLogin(){
      this.router.navigate(['loginUser'])
  }

  toCreateUser(){
      this.router.navigate(['createAccount'])
  }

  toCart() {
    this.router.navigate(['cart']);
  }

  constructor(private router: Router){

  }

}
