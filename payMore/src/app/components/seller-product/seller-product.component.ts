import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'seller-product',
  templateUrl: './seller-product.component.html',
  styleUrl: './seller-product.component.css',
})
export class SellerProductComponent {
  @Input() productsInputted: Products = {
    price: 0,
    color: '',
    gender: '',
    category: '',
    quantity: 0,
    seller: {
      companyName: '',
    },
    imageUrl: '',
    description: '',
  };
}
