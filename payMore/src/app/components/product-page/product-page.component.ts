import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  SessionStorageLength: number = sessionStorage.length;

  products: Products = {
    price: 0,
    color: undefined,
    gender: undefined,
    category: undefined,
    quantity: 0,
    seller: {},
    imageUrl: ''
  }

  
  constructor(private productsService: ProductsService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.products = this.productsService.getAllProducts();
    let productId: number = Number(this.activateRoute.snapshot.params['productId']);
    console.log(productId);
    this.products = this.productsService.getProductById(productId);
  }


}
