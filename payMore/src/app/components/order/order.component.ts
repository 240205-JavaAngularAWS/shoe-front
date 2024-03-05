import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { IOrder } from '../../interfaces/IOrder';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
orders: IOrder[] = [];



constructor(private ordersService: OrdersService, private activateRoute: ActivatedRoute){
  
}

loadOrders(userId: number): void {
  this.ordersService.getOrdersByUserId(userId).subscribe((orders) => {
    this.orders = orders;
    this.orders.forEach(order => {
      order.orderItems.forEach(item => {
        this.ordersService.getProductInfo(item.productId).pipe(
        ).subscribe(url => {
          item.imageUrl = url.imageUrl; // Add pictureUrl property dynamically
        });
      });
    });
  });
}


ngOnInit(){
  let userId : number = 5;
  this.loadOrders(userId);
  console.log(`Orders" ${this.orders}`);









}





}
