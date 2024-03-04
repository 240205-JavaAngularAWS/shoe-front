import { Component, Input } from '@angular/core';
import { IList } from '../../interfaces/IList';
import { Router } from '@angular/router';
@Component({
  selector: 'seller-icon',
  templateUrl: './seller-icon.component.html',
  styleUrl: './seller-icon.component.css',
})
export class SellerIconComponent {
  @Input() listInputted: IList = {
    id: 0,
    title: '',
    owner: {
      username: '',
      password: '',
    },
    products: [],
  };


}
