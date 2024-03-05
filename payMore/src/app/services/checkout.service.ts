// checkout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {}

  submitCheckout(checkoutData: any): Observable<any> {
    // Adjust the URL as per your backend endpoint for submitting the checkout data
    return this.http.post<any>('http://localhost:8080/orders/submit', checkoutData);
  }

  getOrderDetails(userId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/orders/${userId}`);
  }
}
