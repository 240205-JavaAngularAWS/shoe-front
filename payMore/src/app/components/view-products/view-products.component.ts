import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  @Input() productsInputted: Products= {
      price: 0,
      color: '',
      gender: '',
      category: '',
      quantity: 0,
      seller: {
        companyName: "",
      },
      imageUrl: ''
    }

    @Output() viewProduct = new EventEmitter();

    viewProductById(){
      console.log("attempting to view item with ID: " + this.productsInputted.id);
      this.viewProduct.emit(this.productsInputted);
    }

    addToCart() {
      if(sessionStorage.getItem('username')) {
        let user = sessionStorage.getItem('username');
        let userId = user && JSON.parse(user);
        console.warn(userId);
      }
    }

    constructor(private productService: ProductsService) {

    }
  }
