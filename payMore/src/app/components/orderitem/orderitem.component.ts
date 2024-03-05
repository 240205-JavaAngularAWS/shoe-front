import { Component, Input } from '@angular/core';
import { IOrderItem } from '../../interfaces/IOrderItem';

@Component({
  selector: 'orderitem',
  templateUrl: './orderitem.component.html',
  styleUrl: './orderitem.component.css'
})
export class OrderitemComponent {

  orderItems: IOrderItem[] = []; 

  @Input() orderItemInput: IOrderItem = {
    price: 0,
    quantity: 0,
    productId: 0
  }

}
