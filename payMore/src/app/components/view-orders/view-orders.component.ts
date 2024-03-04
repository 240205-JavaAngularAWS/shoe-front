import { Component, Input } from '@angular/core';
import { Orders } from '../../interfaces/orders';

@Component({
  selector: 'view-orders',
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {


  @Input() ordersInputted: Orders = {
    priceTotal: 10.00,
    time:'',
    orderItems:''

    
  }

}
