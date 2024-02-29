import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    // WriteReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
