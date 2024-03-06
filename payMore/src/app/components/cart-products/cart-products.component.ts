import { Component, Input } from '@angular/core';
import { IOrderItem } from '../../interfaces/IOrderItem';
import { IOrder } from '../../interfaces/IOrder';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'cart-products',
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css'
})
export class CartProductsComponent {
userId: number = Number(sessionStorage.getItem("id"));


orderItem: IOrderItem[] = [];



orders: IOrder[] = [
  {
  priceTotal: 0,
  status: "",
  orderItems: []
  }
];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.orderService.getCartByUserId(this.userId).subscribe((data) => {
      this.orders = data;
    });
  }
}
