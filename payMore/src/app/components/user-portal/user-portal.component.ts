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

  SessionStorageLength: number = sessionStorage.length;

  searchInputted: string = "";

  categorySelected: string = "";

  searchShoesResult: Products[] = []

  viewProduct($event: Products){
    console.log($event.id);
    let id = $event.id;
    this.router.navigate([`productPage/${id}`]);
  }

  // search shoe by keywprd
  searchShoes(results: string) {
    if(!results) {
      this.searchShoesResult = this.products;
      return;
    } 

    console.log(results);

    this.productsService.findProductByKeyword(results)
      .subscribe((data)=>{
        this.products = data
      });
      this.searchShoesResult = this.products;
  }

  // clears search result and refresh the page
  clearSearchResults(){
    location.reload();
  }

  // filter shoes by category
  filterShoes(category: string){
    console.log(category);
    if(!category) {
      this.searchShoesResult = this.products;
      return;
    }
    this.productsService.findProductByCategory(category)
      .subscribe((data)=>{
        this.products = data
      });
      this.searchShoesResult = this.products;
  }

  products: Products[] = []
  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit() {
    this.productsService.getAllProducts()
      .subscribe((data)=>{
        this.products = data
      });
    this.searchShoesResult = this.products
  }

}
