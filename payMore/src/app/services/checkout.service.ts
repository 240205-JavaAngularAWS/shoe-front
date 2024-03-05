import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  submitCheckout(checkoutData: any): Observable<any> {
    // Adjust the URL to your backend endpoint for submitting checkout information
    const checkoutUrl = ' ';

    return this.http.post<any>(checkoutUrl, checkoutData);
  }

  
}

