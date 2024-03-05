import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { IOrder } from '../../interfaces/IOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
orders: IOrder[] = [];
orderId: number = 0;



constructor(private ordersService: OrdersService){
  
}




ngOnInit(){
  this.loadOrders();






}


loadOrders(): void {
  const rawId: (string | null) = sessionStorage.getItem("userId");
  const userId: number = (rawId ? parseInt(rawId) : 4);
  
  this.ordersService.getOrdersByUserId(userId).subscribe((orders: IOrder[]) => {
    this.orders = orders;

  })

  

}


}
