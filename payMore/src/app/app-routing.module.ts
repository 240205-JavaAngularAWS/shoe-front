import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerRegisterComponent } from './components/seller-register/seller-register.component';
import { WriteReviewComponent } from './components/write-review/write-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { SellerCategoriesComponent } from './components/seller-categories/seller-categories.component';
import { SellerPortalComponent } from './components/seller-portal/seller-portal.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout-form/checkout-form.component';


const routes: Routes = [
  { path: 'loginUser', component: UserLoginComponent },
  { path: 'createAccount', component: UserRegisterComponent },
  { path: 'loginSeller', component: SellerLoginComponent },
  { path: 'createAccountSeller', component: SellerRegisterComponent },
  { path: 'userPortal/status=PENDING', component: UserPortalComponent },
  // { path: 'viewProducts', component: ViewProductsComponent }, // This line is commented out; uncomment if needed
  { path: 'productPage/:productId', component: ProductPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'userPortal'},
  { path: 'cart', component: CartComponent },
  { path: 'sellerPortal', component: SellerCategoriesComponent },
  { path: 'orders', component: OrderHistoryComponent },

  { path: 'sellerPortals', component: SellerPortalComponent },
  { path: 'checkout', component: CheckoutComponent },
  {path: 'userPortal', component: UserPortalComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

