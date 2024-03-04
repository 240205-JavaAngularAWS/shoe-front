import { Component } from '@angular/core';
import { sellerList } from '../../interfaces/sellerList';
import { SellerProductsService } from '../../services/seller-products.service';
@Component({
  selector: 'seller-portal',
  templateUrl: './seller-portal.component.html',
  styleUrl: './seller-portal.component.css',
})
export class SellerPortalComponent {
  lists: sellerList[] = [];

  constructor(private sellerService: SellerProductsService) {}

  ngOnInit() {
    // we use the ngOnInit lifecycle method to control the initiliazation for our variables
    // this.lists = this.todoService.getListsByUser()
    // ^ Doesn't work because it's not an observable result from a request
  }
}
