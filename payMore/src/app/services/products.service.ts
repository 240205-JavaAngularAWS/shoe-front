import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [
    {
  price: 300.00,
  color: "Red",
  gender: "MEN",
  category: "Sneakers",
  quantity: 5,
  seller: {
    companyName: "Nike"
  },
  imageUrl: ""
},
{
 
  price: 500.00,
  color: "Blue",
  gender: "WOMEN",
  category: "Heels",
  quantity: 7,
  seller: {
    companyName: "Air"
  },
  imageUrl: ""
},
{

  price: 100.00,
  color: "Orange",
  gender: "UNISEX",
  category: "Sandals",
  quantity: 20,
  seller: {
    companyName: "Nike"
  },
  imageUrl: ""
},
{
  price: 200.00,
  color: "Purple",
  gender: "MEN",
  category: "Running Shoes",
  quantity: 12,
  seller: {
    companyName: "Air"
  },
  imageUrl: ""
}
]

getAllProducts(): Products[]{
    return this.products;
}
  constructor() { }
}



// {
//   price: 300.00,
//   color: "Red",
//   gender: "MEN",
//   category: "Sneakers",
//   quantity: 5,
//   seller: {
//     username: "eric"
//   },
//   imageUrl: ""
// },
// {
//   price: 500.00,
//   color: "Blue",
//   gender: "WOMEN",
//   category: "Heels",
//   quantity: 7,
//   seller: {
//     username: "eric"
//   },
//   imageUrl: ""
// },
// {
//   price: 100.00,
//   color: "Orange",
//   gender: "UNISEX",
//   category: "Sandals",
//   quantity: 20,
//   seller: {
//     username: "user1"
//   },
//   imageUrl: ""
// },
// {
//   price: 200.00,
//   color: "Purple",
//   gender: "MEN",
//   category: "Running Shoes",
//   quantity: 12,
//   seller: {
//     username: "user1"
//   },
//   imageUrl: ""
// }
