import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar-sl',
  templateUrl: './nav-bar-sl.component.html',
  styleUrl: './nav-bar-sl.component.css'
})
export class NavBarSLComponent {

toLogin(){
  this.router.navigate(['loginSeller'])
}

toCreateUser(){
  this.router.navigate(['createAccountSeller'])
}
toCart() {
  this.router.navigate(['cart']);
}

constructor(private router: Router){

}

}
