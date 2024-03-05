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

findProductByKeyword(keyword: string): Observable<Products[]>{
  return this.http.get<Products[]>(`http://localhost:8080/products/searchBy?keyword=${keyword}`);
}

findProductByCategory(category: string): Observable<Products[]>{
  return this.http.get<Products[]>(`http://localhost:8080/products/filterBy?category=${category}`);
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



