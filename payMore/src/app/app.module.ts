import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { SellerNavComponent } from './components/seller-nav/seller-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavBarComponent,
    UserNavComponent,
    SellerNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
