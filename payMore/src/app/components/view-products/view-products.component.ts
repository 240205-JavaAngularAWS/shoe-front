import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { IOrder } from '../../interfaces/IOrder';
import { IOrderItem } from '../../interfaces/IOrderItem';


@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
existingOrderId: number = 0; 

products: any[] = [];

orders: IOrder[] = [];
orderItem: IOrderItem = {
  orderId: 0,
  price: 0,
  quantity: 0,
  productId: 0
};
newCart: IOrder = {
  priceTotal: 0,
  status: "PENDING",
  orderItems: [],
  userId: 0
}
 userId: number = 0;
  @Input() productsInputted: Products= {
      productName: '',
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
        if(data.length > 0) {
          let productId: (number | null);
          let orderId: (number | undefined);
          // Null checking product Id
          productId = this.productsInputted.id ? this.productsInputted.id : 0;
          orderId = data[0] ? data[0].id : 0;
          console.log("Exists");
          // setting the values of orderItems 
          this.orderItem.price = this.productsInputted.price;
          this.orderItem.quantity++;
          this.orderItem.productId = productId;
          this.orderItem.orderId = orderId;
          // Calling addItemToCart to add to cart 
          this.orderService.addItemtoCart(this.orderItem).subscribe((data) => {
            console.log(data);
          })
        } else {
          this.orderService.registerCart(this.newCart).subscribe((data) => {
            console.log(data);
            console.log("Cart Created");
            let productId: (number | null);
            let orderId: (number | undefined);
            // Null checking product Id
            productId = this.productsInputted.id ? this.productsInputted.id : 0;
            orderId = data.id;
            // setting the values of orderItems 
            this.orderItem.price = this.productsInputted.price;
            this.orderItem.quantity++;
            this.orderItem.productId = productId;
            this.orderItem.orderId = orderId;
            // Calling addItemToCart to add to cart 
            this.orderService.addItemtoCart(this.orderItem).subscribe((data) => {
              console.log(data);
            })
          })
        }
       });
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
<<<<<<< HEAD
    this.router.navigate(['/checkout']);
  };
}
=======
    this.orderService.selectedProduct = this.productsInputted;
    this.router.navigate(['/checkout']);
  }
}
>>>>>>> origin/naodBranch
