import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { Seller } from '../../interfaces/seller';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'seller-categories',
  templateUrl: './seller-categories.component.html',
  styleUrl: './seller-categories.component.css',
})
export class SellerCategoriesComponent {
  // Things to note: This is a class and has associated lifecycle hooks that we can connect to
  // We can define fields and functions inside of here just as we would in normal TS/JS
  // The additional lifecycle methods will be explored next week (constructor, ngOnInit)

  products: Products[] = [

  ];

  counter: number = 5;
  newPrice: number = 0;
  newColor: string = '';
  newGender: string = '';
  newCategory: string = '';
  newQuantity: number = 0;
  newSeller: Seller = { companyName: '' };
  newImage: string = '';
  newDescription: string = '';

  hide: boolean = true;

  createProduct() {
    if (
      !this.newPrice &&
      !this.newColor &&
      !this.newGender &&
      !this.newCategory &&
      !this.newQuantity &&
      !this.newSeller &&
      !this.newImage &&
      !this.newDescription
    ) {
      // console.log("Text is blank")
      // TODO add in error message
      this.hide = false;
      return;
    }
    // Now we're at the part where we try to create the product
    let newProduct: Products = {
      id: 0,
      price: this.newPrice,
      color: this.newColor,
      gender: this.newGender,
      category: this.newCategory,
      quantity: this.newQuantity,
      seller: this.newSeller,
      imageUrl: this.newImage,
      description: this.newDescription,
    };
    this.products.push(newProduct);

    // clear inputs
    this.newPrice = 0;
    this.newColor = '';
    this.newGender = '';
    this.newCategory = '';
    this.newQuantity = 0;
    this.newSeller = {};
     this.newImage = '';
     this.newDescription = '';
    this.hide = true;
  }

constructor (private productService: ProductsService) {}

  ngOnInit() {

    let one = 1;
    
    this.productService.findProductBySellerId(one).subscribe((data) => {
      this.products = data;
    });
  }
}
