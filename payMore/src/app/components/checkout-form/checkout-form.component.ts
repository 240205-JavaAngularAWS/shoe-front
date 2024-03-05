import { Component } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent {

 placedOrders: string[] = ['Order 1', 'Order 2'];
  billingInfo: any = {};
  creditCardInfo: any = {};

  constructor(private checkoutService: CheckoutService) { }

  submitCheckout(): void {
    const checkoutData = {
      billingInfo: this.billingInfo,
      creditCardInfo: this.creditCardInfo
    };

    this.checkoutService.submitCheckout(checkoutData).subscribe(
      (response) => {
        console.log('Checkout submitted successfully:', response);
        // You might want to reset form fields or show a success message here
      },
      (error) => {
        console.error('Error submitting checkout:', error);
        // You might want to display an error message to the user
      }
    );
  }

}
