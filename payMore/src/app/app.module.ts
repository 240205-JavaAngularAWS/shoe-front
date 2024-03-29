import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgbModule, NgbRating, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { SellerNavComponent } from './components/seller-nav/seller-nav.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegisterComponent } from './components/seller-register/seller-register.component';
import { NavBarSLComponent } from './components/nav-bar-sl/nav-bar-sl.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { WriteReviewComponent } from './components/write-review/write-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ReviewComponent } from './components/review/review.component';
import { SellerPortalComponent } from './components/seller-portal/seller-portal.component';
import { SellerProductComponent } from './components/seller-product/seller-product.component';
import { SellerCategoriesComponent } from './components/seller-categories/seller-categories.component';
import { SellerIconComponent } from './components/seller-icon/seller-icon.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';
import { CheckoutService } from './services/checkout.service';
import { CheckoutComponent } from './components/checkout-form/checkout-form.component';










@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavBarComponent,
    UserNavComponent,
    SellerNavComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    NavBarSLComponent,
    UserRegisterComponent,
    ReviewListComponent,
    UserPortalComponent,
    ViewProductsComponent,
    ReviewComponent,
    ReviewListComponent,
    SellerPortalComponent,
    SellerProductComponent,
    SellerCategoriesComponent,
    SellerIconComponent,
    ProductPageComponent,
    WriteReviewComponent,
    OrderHistoryComponent,
    ViewOrdersComponent,
    CartComponent,
    OrderComponent,
    CartProductsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
