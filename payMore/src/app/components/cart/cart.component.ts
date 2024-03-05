import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  SessionStorageLength: number = sessionStorage.length;
  products: Products[] = [
    {
      price: 0,
      color: "",
      gender: "",
      category: "",
      quantity: 0,
      seller: {},
      imageUrl: ''
    }
  ];

}
