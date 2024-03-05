import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [
    // {
    //   id: 1,
    //   price: 300.00,
    //   color: "Red",
    //   gender: "MEN",
    //   category: "Sneakers",
    //   quantity: 5,
    //   seller: {
    //     companyName: "Nike"
    //   },
    //   imageUrl: ""
    // },
    // {
    //   id: 2,
    //   price: 500.00,
    //   color: "Blue",
    //   gender: "WOMEN",
    //   category: "Heels",
    //   quantity: 7,
    //   seller: {
    //     companyName: "Air"
    //   },
    //   imageUrl: ""
    // },
    // {
    //   id: 3,
    //   price: 100.00,
    //   color: "Orange",
    //   gender: "UNISEX",
    //   category: "Sandals",
    //   quantity: 20,
    //   seller: {
    //     companyName: "Nike"
    //   },
    //   imageUrl: ""
    // },
    // {
    //   id: 4,
    //   price: 200.00,
    //   color: "Purple",
    //   gender: "MEN",
    //   category: "Running Shoes",
    //   quantity: 12,
    //   seller: {
    //     companyName: "Air"
    //   },
    //   imageUrl: ""
    // }
]

getAllProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`http://localhost:8080/products/all`);
}


getProductById(productId: number): Products{
  
  for (let product of this.products){
    if(product.id == productId){
      return product;
    }
  }

  return {
    price: 0,
    color: undefined,
    gender: undefined,
    category: undefined,
    quantity: 0,
    seller: {},
    imageUrl: ''
  };
}

saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(this.products));
}
addToCart(addedProduct: any) {
  this.products.push(addedProduct);
  this.saveCart();
}

loadCart() {
  this.products = JSON.parse(localStorage.getItem('cartItems') as any) || [];
}

productInCart(product: any) {
  return this.products.findIndex((x: any) => x.id === product.id) > -1;
}

removeProduct(product: any) {
  let index = this.products.findIndex((x: any) => x.id === product.id)
  if(index > -1) {
    this.products.splice(index, 1);
    this.saveCart();
  }
}

clearProducts() {
  localStorage.clear();
}

  constructor(private http:HttpClient) { }
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
