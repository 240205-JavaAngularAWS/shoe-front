// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutComponent implements OnInit{
  creditCardNumber: string = '';
  expirationDate: string = ' ';
  securityCode: number = 0;
  orderDetails: any;
  userId!: number;

  constructor(private checkoutService: CheckoutService) {}

  submitCheckoutForm() {
    const checkoutData = {
      creditCardNumber: this.creditCardNumber,
      expirationDate: this.expirationDate,
      securityCode: this.securityCode,
      // You can include other credit card fields here
    };

    // Call the service method to submit the checkout data
    this.checkoutService.submitCheckout(checkoutData)
      .subscribe(
        (response) => {
          console.log('Order submitted successfully:', response);
         
        },
        (error) => {
          console.error('Error submitting order:', error);
          // Handle error response
        }
      );
  }

  ngOnInit() {
    // Fetching order details from the backend when the component initializes
    this.checkoutService.getOrderDetails(this.userId).subscribe(
      (response) => {
        this.orderDetails = response;
      },
      (error) => {
        console.error('Error fetching order details:', error);
      }
    );
  }
}
