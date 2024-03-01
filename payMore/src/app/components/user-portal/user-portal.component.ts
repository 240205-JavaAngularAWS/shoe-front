import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrl: './user-portal.component.css'
})
export class UserPortalComponent {

  products: Products[] = []
  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }
}
