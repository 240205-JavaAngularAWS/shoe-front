import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sellerNav',
  templateUrl: './seller-nav.component.html',
  styleUrl: './seller-nav.component.css'
})
export class SellerNavComponent {

  toLogin(){
    this.router.navigate(['loginSeller']);
    sessionStorage.clear();
  }

  constructor(private router: Router){

  }
}
