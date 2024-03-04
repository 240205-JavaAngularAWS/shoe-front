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
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';


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
    WriteReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
