import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { IOrder } from '../../interfaces/IOrder';


@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
products: any[] = [];

orders: IOrder[] = [];

newCart: IOrder = {
  priceTotal: 0,
  status: "PENDING",
  orderItems: [],
  userId: 0
}
 userId: number = 0;
  @Input() productsInputted: Products= {
      price: 0,
      color: '',
      gender: '',
      category: '',
      quantity: 0,
      seller: {
        companyName: "",
      },
      imageUrl: ''
    };

    @Output() viewProduct = new EventEmitter();

    viewProductById(){
      console.log("attempting to view item with ID: " + this.productsInputted.id);
      this.viewProduct.emit(this.productsInputted);
    };

    
    addToCart() {
      // this checks if user is logged in, if not, send user back to login page
        if(!sessionStorage.getItem("id")) {
        this.router.navigate(['loginUser']);
       }
       // Now, we will implement functionality to addToCart
       this.orderService.getCartByUserId(this.userId).subscribe((data) => {
        this.orders = data;
        console.log(this.orders);
       });
       if(this.orders) {
        console.log("Cart Created!");
        this.orderService.registerCart(this.newCart).subscribe((data) => {
          this.orders = data;
        })
       } else {
        console.log("Added to Cart");
       }


    };


    ngOnInit() {
      this.userId = Number(sessionStorage.getItem('id'));
      this.newCart.userId = this.userId;
    };


    constructor(private productService: ProductsService,
       private router: Router,
       private orderService: OrdersService) {

  };

  checkout(){
    this.router.navigate(['/checkout']);
  };
}



// orderId: IOrder = {
//   id: 0,
//   priceTotal: 0,
//   status: "",
//   timestamp: "",
//   orderItems: [],
//   userId: 0
// }




// orders: IOrderItem = {
//   productName: '',
//   imageUrl: '',
//   price: 0,
//   quantity: 0,
//   productId: 0
// };

// IaddToCart: IAddToCart = {
//   price: 0,
//   quantity: 0,
//   orderId: 0,
//   productId: 0
// }



// cart: ICart = {
//   priceTotal: 0,
//   status: '',
//   userId: 0
// };



      // // console.log(this.orderId)
      // if(!sessionStorage.getItem("id")) {
      //   this.router.navigate(['loginUser']);
      //  }
      // //  console.log(this.orderId);
      // //  console.log(this.productsInputted.id);
      //   if(this.orderId.status == 'PENDING') {
      //     console.log("Success!");
      //     this.IaddToCart.productId = this.productsInputted.id;
      //     console.log(this.IaddToCart);
      //     console.log(this.orderId);
      //     // this.orderService.addToOrder(this.IaddToCart).subscribe
      //     // this.IaddToCart.orderId = this.cart
      //   } else {
      //     // console.log(this.cart)
      //     this.orderService.createNewOrder(this.cart).subscribe((data) => {
      //       console.log("Cart Created!");
      //       this.orderId = data;
      //       console.log(this.orderId);
      //     })
      //   }