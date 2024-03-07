// checkout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private baseUrl = 'http://ec2-54-144-33-180.compute-1.amazonaws.com';

  constructor(private http: HttpClient) {}

  submitCheckout(checkoutData: any): Observable<any> {
    // Adjust the URL as per your backend endpoint for submitting the checkout data
    return this.http.post<any>(`${this.baseUrl}/orders/submit`, checkoutData);
  }

  getOrderDetails(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/orders/${userId}`);
  }
}
