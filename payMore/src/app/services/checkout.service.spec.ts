// checkout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {}

  // Method to fetch order details from the backend
  getOrderDetails(orderId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/orders/${orderId}`);
  }
}

