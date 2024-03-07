import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://ec2-54-144-33-180.compute-1.amazonaws.com';
  products: Products[] = [];

  addProduct(product: Products): Observable<Products> {
    // Assuming the backend expects the product object in the request body and returns the added product
    return this.http.post<Products>(`${this.baseUrl}/products`, product);
  }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseUrl}/products/all`);
  }

  findProductByKeyword(keyword: string): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.baseUrl}/products/searchBy?keyword=${keyword}`
    );
  }

  findProductByCategory(category: string): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.baseUrl}/products/filterBy?category=${category}`
    );
  }

  findProductBySellerId (sellerId:number): Observable<Products[]> {
    return this.http.get<Products[]>(
      `${this.baseUrl}/products/filterBy?sellerId=${sellerId}`
    );
  }
  
  getProductById(productId: number): Products {
    for (let product of this.products) {
      if (product.id == productId) {
        return product;
      }
    }



    return {
      productName: '',
      price: 0,
      color: undefined,
      gender: undefined,
      category: undefined,
      quantity: 0,
      seller: {},
      imageUrl: '',
      description: ''
    };
  }

  constructor(private http: HttpClient) {}
}



