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



