import { Injectable } from '@angular/core';
import { sellerList } from '../interfaces/sellerList';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SellerProductsService {
  // fix to buy products list
  lists: sellerList[] = [];

  // getListsByUser() {
  //   // The user should be logged in, I'm just gonna pull their username from sessionstorage and use it here
  //   let username: string | null = sessionStorage.getItem('username');

  //   let usernameForReal: string;
  //   if (username) {
  //     usernameForReal = username;
  //   } else {
  //     usernameForReal = '';
  //   }

  // }
  constructor(private authService: AuthService) {}
}
