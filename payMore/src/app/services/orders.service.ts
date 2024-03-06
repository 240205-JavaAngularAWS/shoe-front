import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import { Products } from '../interfaces/products';
import { IOrderItem } from '../interfaces/IOrderItem';
import { ICart } from '../interfaces/ICart';
import { IAddToCart } from '../interfaces/IAddToCart';
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

  createNewOrder(cart: ICart): Observable<IOrder>{
    return this.http.post<IOrder>(`${this.url}/orders`, cart, this.headers);
  }

  addToOrder(iAddtoCart: IAddToCart): Observable<IOrder[]> {
    return this.http.put<IOrder[]>(`${this.url}/orders`, iAddtoCart, this.headers)
  }




}