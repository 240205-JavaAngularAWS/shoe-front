import { Component, Input } from '@angular/core';
import { IOrderItem } from '../../interfaces/IOrderItem';
import { IOrder } from '../../interfaces/IOrder';
@Component({
  selector: 'cart-products',
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css'
})
export class CartProductsComponent {
@Input() orders: IOrderItem = {
  price: 0,
  imageUrl: "",
  quantity: 0,
  productId: 0
 };

  constructor() {}
}
