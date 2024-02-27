import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-nav',
  templateUrl: './seller-nav.component.html',
  styleUrl: './seller-nav.component.css'
})
export class SellerNavComponent {

  toLogin(){
    this.router.navigate(['loginUser'])
  }

  constructor(private router: Router){

  }
}
