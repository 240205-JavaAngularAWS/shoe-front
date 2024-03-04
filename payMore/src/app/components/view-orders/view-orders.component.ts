import { Component, Input } from '@angular/core';
import { IOrder } from '../../interfaces/IOrder';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'view-orders',
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
  
  constructor(private ordersService: OrdersService){
    // inject service
  }


  orders: IOrder[] = []

  ngOnInit(){
    this.ordersService.getOrdersByUserId()

  }










}
