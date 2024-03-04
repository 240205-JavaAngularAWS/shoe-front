import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrl: './user-portal.component.css'
})
export class UserPortalComponent {

  searchInputted: string = ""

searchShoesResult: Products[] = []
  searchShoes(results: string) {
    if(!results) {
      this.searchShoesResult = this.products;
      return;
    } 
    this.searchShoesResult = this.products.filter(searchShoes => {
      searchShoes?.gender.toLowerCase().includes(results.toLowerCase())
    })
  }

  products: Products[] = []
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.searchShoesResult = this.products
  }
}
