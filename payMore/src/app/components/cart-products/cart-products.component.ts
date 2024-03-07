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


orderItem: IOrderItem[] = [
  {
  orderId: 0,
  productName: "",
  imageUrl: "",
  price: 0,
  quantity: 0,
  productId: 0
  }
];



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
      this.orders.forEach(order => {
      
        order.orderItems.forEach(item => {
          
          this.orderService.getProductInfo(item.productId).pipe(
          ).subscribe(url => {
            item.productName = url.productName;
            item.imageUrl = url.imageUrl; // Add pictureUrl property dynamically
          });
        });
      });
    });
  }
}
