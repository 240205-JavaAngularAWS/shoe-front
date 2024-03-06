import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IOrderItem } from '../../interfaces/IOrderItem';


@Component({
  selector: 'view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
products: any[] = [];
orders: IOrderItem[] = [];

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
    }

    @Output() viewProduct = new EventEmitter();

    viewProductById(){
      console.log("attempting to view item with ID: " + this.productsInputted.id);
      this.viewProduct.emit(this.productsInputted);
    }

    addToCart() {
     if(!sessionStorage.getItem("id")) {
      this.router.navigate(['loginUser']);
     }
      if(this.router.url.includes('status=PENDING')) {
        console.log("Success!")
        this.orderService.addToOrder().subscribe((data) => {
          this.orders = data;
          this.orders.forEach(item => {
            this.orderService.getProductInfo(item.productId).pipe()
            .subscribe(url => {
              item.imageUrl = url.imageUrl
            })
          })
        })
      } else {
        this.orderService.createNewOrder().subscribe((data) => {
          
        })
      }
    }


    constructor(private productService: ProductsService,
       private router: Router,
       private orderService: OrdersService) {

    }
  }
