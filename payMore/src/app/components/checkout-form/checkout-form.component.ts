import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { ICreditCard } from './../../interfaces/ICreditCard';
import { IExtendedAddress } from './../../interfaces/IExtendedAddress';
import { Products } from './../../interfaces/products';
import { IOrder } from '../../interfaces/IOrder';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutComponent implements OnInit {
  shipToDifferentAddress: boolean = false;
  userId = Number(sessionStorage.getItem("id"));
  SessionStorageLength: any;
  products: Products[] = [];
  cart: IOrder = { orderItems: [] };
  subTotal = 0;
  total = 0;
  groundShipping = 5;

  // Payment and shipping information bound to the form via ngModel
  payment: any = {};
  shipping: any = {};

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.loadCart(this.userId);
  }

  loadCart(userId: number): void {
    this.orderService.getCartByUserId(userId).subscribe({
      next: (order) => {
        this.cart = order[0];
        this.subTotal = typeof order[0].priceTotal === 'number' ? order[0].priceTotal : 0;
        this.total = this.subTotal + this.groundShipping;
        this.loadProductInfo();
      },
      error: (error) => console.error('Error loading cart:', error)
    });
  }

  loadProductInfo(): void {
    this.cart.orderItems.forEach(item => {
      this.orderService.getProductInfo(item.productId).subscribe({
        next: (itemInfo) => {
          item.productName = itemInfo.productName;
          item.imageUrl = itemInfo.imageUrl;
        },
        error: (error) => console.error('Error loading product info:', error)
      });
    });
  }

  submitOrder(): void {
    this.addAddresses(() => {
      this.orderService.getCartByUserId(this.userId).subscribe({
        next: (data) => {
          const orderId = data[0]?.id;
          if (typeof orderId === 'number') {
            this.finalizeOrder(orderId);
          }
        },
        error: (error) => console.error('Error submitting order:', error)
      });
    });
  }

  finalizeOrder(orderId: number): void {
    this.orderService.submitOrder(orderId).subscribe({
      next: (data) => {alert('Order submitted successfully:')},
      error: (error) => console.error('Error finalizing order:', error)
    });
  }

  addAddresses(callback: () => void): void {
    const billingAddress = this.createBillingAddress();
    const creditCard = this.createCreditCard(billingAddress);

    this.orderService.addCreditCard(creditCard).subscribe({
      next: (response) => {
        console.log('Credit Card Info added successfully:', response);
        if (this.shipToDifferentAddress) {
          this.addShippingAddress(callback);
        } else {
          callback();
        }
      },
      error: (error) => {
        console.error('Error adding Credit Card Info:', error);
        callback();
      }
    });
  }

  createBillingAddress(): IExtendedAddress {
    return {
      addressText: this.payment.billingAddress,
      city: this.payment.city,
      state: this.payment.state,
      zipCode: this.payment.zipCode,
      userId: this.userId,
      addressType: 'BILLING',
    };
  }

  createCreditCard(billingAddress: IExtendedAddress): ICreditCard {
    return {
      cardNumber: this.payment.cardNumber,
      securityCode: this.payment.securityCode,
      firstName: this.payment.firstName,
      lastName: this.payment.lastName,
      expirationDate: this.payment.expiration,
      address: billingAddress,
      user: {
        id: this.userId,
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
      }
    };
  }

  addShippingAddress(callback: () => void): void {
    const shippingAddress: IExtendedAddress = {
      ...this.shipping,
      userId: this.userId,
      addressType: 'SHIPPING',
    };

    this.orderService.addShippingAddress(shippingAddress).subscribe({
      next: (response) => {
        console.log('Shipping Address Info added successfully:', response);
        callback();
      },
      error: (error) => {
        console.error('Error Shipping Address Info:', error);
        callback();
      }
    });
  }
}

