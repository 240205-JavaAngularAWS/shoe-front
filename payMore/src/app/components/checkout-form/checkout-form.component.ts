// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutComponent implements OnInit{
  shipToDifferentAddress: boolean = true;
  orderDetails: any = {}; 
  userId!: number; 
SessionStorageLength: any;

  constructor(
    private authService: AuthService, //
    private checkoutService: CheckoutService
  ) {}

  ngOnInit() {
  //   // Call the loginUser method in AuthService to authenticate the user
  //   this.authService.loginUser(username, password).subscribe(
  //     (user) => {
  //       // Assuming the user object contains the user ID
  //       this.userId = user.id;

  //       // Fetch order details for the user
  //       this.checkoutService.getOrderDetails(this.userId).subscribe(
  //         (response) => {
  //           this.orderDetails = response;
  //         },
  //         (error) => {
  //           console.error('Error fetching order details:', error);
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.error('Error logging in:', error);
  //     }
  //   );
  // }
}
}


// this.checkoutService.submitCheckout(checkoutData)
//       .subscribe(
//         (response) => {
//           console.log('Order submitted successfully:', response);
         
//         },
//         (error) => {
//           console.error('Error submitting order:', error);
          
//         }
//       );
// submitCheckoutForm() {
//   const checkoutData = {
//     creditCardNumber: this.creditCardNumber,
//     expirationDate: this.expirationDate,
//     securityCode: this.securityCode,
   
//   };  
// }