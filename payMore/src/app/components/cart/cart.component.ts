import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { IOrderItem } from '../../interfaces/IOrderItem';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  orders: IOrderItem[] = [];
  SessionStorageLength: number = sessionStorage.length;

}
