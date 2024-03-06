import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import { Products } from '../interfaces/products';
import { IOrderItem } from '../interfaces/IOrderItem';
import { IAddress } from '../interfaces/IAddress';
import { ICreditCard } from '../interfaces/ICreditCard';
import { IExtendedAddress } from '../interfaces/IExtendedAddress';
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


  // redundant, but added due to time crunch
  getCartByUserId(userId: number): Observable<IOrder[]>{
    // will return as list, even though there is only one cart.
    return this.http.get<IOrder[]>(`${this.url}/orders/filterBy?userId=${userId}&status=PENDING`, this.headers)

  }

  getProductInfo(productId: number): Observable<Products>{
    return this.http.get<Products>(`${this.url}/products/${productId}`, this.headers)


  }

  // redundant, but allows data to be passed in as a parameter.
  registerCart(data: IOrder): Observable<IOrder[]> {
    return this.http.post<IOrder[]>(`${this.url}/orders`, data, this.headers)
  }

  // redundant, but allows data to be passed in as a parameter.
  addItemtoCart(data: IOrderItem): Observable<IOrder> {
    return this.http.put<IOrder>(`${this.url}/orders`, data, this.headers)

  }

  addShippingAddress(data: IExtendedAddress): Observable<IExtendedAddress>{
    return this.http.post<IExtendedAddress>(`${this.url}/addresses`, data, this.headers)

  }

  addCreditCard(data: ICreditCard): Observable<ICreditCard>{
    return this.http.post<ICreditCard>(`${this.url}/creditcards`, data, this.headers)
  }


  submitOrder(orderId: number): Observable<IOrder>{
    return this.http.post<IOrder>(`${this.url}/orders/submit?orderId=${orderId}`, this.headers)

  }









}