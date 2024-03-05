import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
private url = "http://localhost:8080" 
private headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})}


  constructor(private http: HttpClient) {}


  getOrdersByUserId(userId : number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.url}/orders/filterBy?userId=${userId}&status=COMPLETED`, this.headers)


      // Subscribe on the component side.
  }

  getProductInfo(productId: number): Observable<Products>{
    return this.http.get<Products>(`${this.url}/products/${productId}`, this.headers)


  }




}