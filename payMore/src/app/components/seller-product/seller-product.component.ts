import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo';

@Component({
  selector: 'seller-product',
  templateUrl: './seller-product.component.html',
  styleUrl: './seller-product.component.css',
})
export class SellerProductComponent {

  @Input() todoInputted: ITodo = {
    id: 0,
    text: '',
    completed: false,
  };

}
