import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Products[] = [];

  addProduct(product: Products): Observable<Products> {
    // Assuming the backend expects the product object in the request body and returns the added product
    return this.http.post<Products>(`http://localhost:8080/products`, product);
  }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`http://localhost:8080/products/all`);
  }

  findProductByKeyword(keyword: string): Observable<Products[]> {
    return this.http.get<Products[]>(
      `http://localhost:8080/products/searchBy?keyword=${keyword}`
    );
  }

  findProductByCategory(category: string): Observable<Products[]> {
    return this.http.get<Products[]>(
      `http://localhost:8080/products/filterBy?category=${category}`
    );
  }

  findProductBySellerId (sellerId:number): Observable<Products[]> {
    return this.http.get<Products[]>(
      `http://localhost:8080/products/filterBy?sellerId=${sellerId}`
    );
  }
  
  getProductById(productId: number): Products {
    for (let product of this.products) {
      if (product.id == productId) {
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
      imageUrl: '',
    };
  }

  constructor(private http: HttpClient) {}
}



