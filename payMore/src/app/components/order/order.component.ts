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
  this.ordersService.getOrdersByUserId(userId).subscribe((data) => {
    console.log(data);
  this.orders = data;

})
}


ngOnInit(){
  let userId : number = 4;
  this.loadOrders(userId);

  console.log(userId);






}





}
