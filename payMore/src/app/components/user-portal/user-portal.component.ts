import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrl: './user-portal.component.css'
})
export class UserPortalComponent {

  searchInputted: string = ""

  searchShoesResult: Products[] = []

  viewProduct($event: Products){
    console.log($event.id);
    let id = $event.id;
    this.router.navigate([`productPage/ ${id}`]);

    //       this.router.navigate(['userPortal']);
  }

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
  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.searchShoesResult = this.products
  }

}
