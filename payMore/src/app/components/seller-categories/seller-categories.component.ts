import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { Seller } from '../../interfaces/seller';
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
    {
      id: 1,
      price: 300.0,
      color: 'Red',
      gender: 'MEN',
      category: 'Sneakers',
      quantity: 5,
      seller: {
        companyName: 'Nike',
      },
      imageUrl: '',
    },
    {
      id: 2,
      price: 500.0,
      color: 'Blue',
      gender: 'WOMEN',
      category: 'Heels',
      quantity: 7,
      seller: {
        companyName: 'Air',
      },
      imageUrl: '',
    },
    {
      id: 3,
      price: 100.0,
      color: 'Orange',
      gender: 'UNISEX',
      category: 'Sandals',
      quantity: 20,
      seller: {
        companyName: 'Nike',
      },
      imageUrl: '',
    },
    {
      id: 4,
      price: 200.0,
      color: 'Purple',
      gender: 'MEN',
      category: 'Running Shoes',
      quantity: 12,
      seller: {
        companyName: 'Air',
      },
      imageUrl: '',
    },
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
    if (!this.newCategory) {
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

    this.newCategory = '';
    this.hide = true;
  }
}
