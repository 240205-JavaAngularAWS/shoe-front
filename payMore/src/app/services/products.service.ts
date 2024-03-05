import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = []

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
