import { Component, Input } from '@angular/core';
import { sellerList } from '../../interfaces/sellerList';
import { Router } from '@angular/router';
@Component({
  selector: 'seller-icon',
  templateUrl: './seller-icon.component.html',
  styleUrl: './seller-icon.component.css',
})
export class SellerIconComponent {
  @Input() listInputted: sellerList = {
    id: 0,
    title: '',
    owner: {
      username: '',
      password: '',
    },
    products: [],
  };
}
