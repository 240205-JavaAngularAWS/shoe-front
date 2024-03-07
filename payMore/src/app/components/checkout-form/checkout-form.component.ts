import { ICreditCard } from './../../interfaces/ICreditCard';
import { OrdersService } from './../../services/orders.service';
// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { AuthService } from '../../services/auth.service';
import { IOrderItem } from '../../interfaces/IOrderItem';
import { IAddress } from '../../interfaces/IAddress';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IExtendedAddress } from '../../interfaces/IExtendedAddress';
import { Products } from '../../interfaces/products';
import { IOrder } from '../../interfaces/IOrder';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutComponent implements OnInit{
  shipToDifferentAddress: boolean = true;
  orderDetails: any = {}; 
  userId: number = Number(sessionStorage.getItem("id"));
  SessionStorageLength: any;

  creditCards: ICreditCard[] = [];
  address: IAddress[] = [];
  formGroupPayment: FormGroup;
  formGroupShipping: FormGroup;
  products: Products[] = [];
  subTotal = 0;
  groundShipping = 5;
  total = 0;

  orderItem: IOrderItem[] = [
    {
    orderId: 0,
    productName: "",
    imageUrl: "",
    price: 0,
    quantity: 0,
    productId: 0
    }
  ];
  
  
  orders: IOrder[] = [
    {
    priceTotal: 0,
    status: "",
    orderItems: []
    }
  ];

  constructor(
    private authService: AuthService, //
    private checkoutService: CheckoutService,
    private ordersService: OrdersService
  ) {
    this.formGroupPayment = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      cardNumber: new FormControl('',Validators.required),
      expiration: new FormControl('',Validators.required),
      securityCode: new FormControl('',Validators.required),
      billingAddress: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      zipCode: new FormControl('',Validators.required)
    });
    this.formGroupShipping = new FormGroup({
      addressText: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      userId: new FormControl(''),
      addressType: new FormControl(''),
    });
    if(this.ordersService.selectedProduct) {
      //set the list of products in cart to this.products
      this.products = [this.ordersService.selectedProduct];
      this.ordersService.selectedProduct = null;
      for(const product of this.products) {
        this.subTotal += product.price;
      }
      this.total = this.subTotal + this.groundShipping;
    }
    else {
      this.getProductInfo();
    }
    
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  getProductInfo() {
    this.ordersService.getCartByUserId(this.userId).subscribe((data) => {
      this.orders = data;
      this.subTotal = data[0].priceTotal || 0;
      this.total = this.subTotal + this.groundShipping;
      this.orders.forEach(order => {
      
        order.orderItems.forEach(item => {
          
          this.ordersService.getProductInfo(item.productId).pipe(
          ).subscribe(product => {
              const pro = {...product,orderId: item.orderId,price: item.price,quantity: item.quantity};
              this.products.push(pro);
          });
        });
      });
    });
  }

  addAddresses(event: any): void
  {
    const address: any = this.formGroupPayment.value;
    const addressVal: IExtendedAddress = {
      addressText: address.billingAddress,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      userId:  this.userId,
      addressType: 'BILLING',
    }
    const value: ICreditCard = {
      cardNumber: address.cardNumber,
      securityCode: address.securityCode,
      firstName: address.firstName,
      lastName: address.lastName,
      expirationDate: address.expiration,
      address: addressVal,
      user: {
        id: this.userId,
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
      }
    }
    
    this.ordersService.addCreditCard(value).subscribe(
      (response: any) => {
        console.log('Credit Card Info added successfully:', response);
        if(this.shipToDifferentAddress) {
          const val: IExtendedAddress = {...this.formGroupShipping.value,userId: this.userId, addressType: 'SHIPPING',sellerId: 5};
          this.ordersService.addShippingAddress(val).subscribe(
            (response: any) => {
              console.log('Shipping Address Info added successfully:', response);
            },
            (error: any) => {
              console.error('Error Shipping Address Info:', error);
            });
        }
      },
      (error: any) => {
        console.error('Error adding Credit Card Info:', error);
      });
    /*this.ordersService.addShippingAddress(this.creditCards).subscribe()(
      (response: any) => {
        console.log('Shipping address added successfully:', response);
        // Handle success response if required
      },
      (error) => {
        console.error('Error adding shipping address:', error);
        // Handle error response if required
      }
    );*/
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