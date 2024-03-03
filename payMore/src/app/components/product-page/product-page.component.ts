import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {


  products: Products[] = []
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

}
