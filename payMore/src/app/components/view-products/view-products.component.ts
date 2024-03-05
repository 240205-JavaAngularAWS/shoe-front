import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
products: any[] = [];

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

    addToCart(product: any) {
      console.log(product);
      if(sessionStorage.getItem('username')) {
        if(!this.productService.productInCart(product)) {
          product.quantity += 1;
          this.productService.addToCart(product);
          
        }
      } else {
        this.router.navigate(['loginUser'])
      }
    }

    constructor(private productService: ProductsService,
       private router: Router,
       private http: HttpClient) {

    }
  }
