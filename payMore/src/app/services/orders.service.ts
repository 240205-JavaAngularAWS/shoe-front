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
  private baseUrl = 'http://ec2-54-144-33-180.compute-1.amazonaws.com';
  private headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
  public selectedProduct: Products | null = null;


  constructor(private http: HttpClient) {}


  getOrdersByUserId(userId : number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders/filterBy?userId=${userId}&status=COMPLETED`, this.headers)
      // Subscribe on the component side.
  }


  // redundant, but added due to time crunch
  getCartByUserId(userId: number): Observable<IOrder[]>{
    // will return as list, even though there is only one cart.
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders/filterBy?userId=${userId}&status=PENDING`, this.headers)

  }

  getProductInfo(productId: number): Observable<Products>{
    return this.http.get<Products>(`${this.baseUrl}/products/${productId}`, this.headers)


  }

  // redundant, but allows data to be passed in as a parameter.
  registerCart(data: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/orders`, data, this.headers)
  }

  // redundant, but allows data to be passed in as a parameter.
  addItemtoCart(data: IOrderItem): Observable<IOrder> {
    return this.http.put<IOrder>(`${this.baseUrl}/orders`, data, this.headers)

  }

  addShippingAddress(data: IExtendedAddress): Observable<IExtendedAddress>{
    return this.http.post<IExtendedAddress>(`${this.baseUrl}/addresses`, data, this.headers)

  }

  addCreditCard(data: ICreditCard): Observable<ICreditCard>{
    return this.http.post<ICreditCard>(`${this.baseUrl}/creditcards`, data, this.headers)
  }


  submitOrder(orderId: number): Observable<IOrder>{
    return this.http.post<IOrder>(`${this.baseUrl}/orders/submit?orderId=${orderId}`, this.headers)

  }









}