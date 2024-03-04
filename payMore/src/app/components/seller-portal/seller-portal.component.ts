import { Component } from '@angular/core';

@Component({
  selector: 'seller-portal',
  templateUrl: './seller-portal.component.html',
  styleUrl: './seller-portal.component.css',
})
export class SellerPortalComponent {
 


  ngOnInit() {
    // we use the ngOnInit lifecycle method to control the initiliazation for our variables
    // this.lists = this.todoService.getListsByUser()
    // ^ Doesn't work because it's not an observable result from a request
  }
}
