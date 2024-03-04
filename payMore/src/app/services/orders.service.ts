import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // This will pull all orders for user

  orderList: IOrder[] = []


  // User needs to be logged in
  getOrdersByUserId(): Observable<IOrder[]>{
  
    
    // User needs to be logged in. Grab the id
    let url = "http://localhost:8080" 
    let user: string | null = sessionStorage.getItem("userId");
    let userId : number;
    let headers = { headers: new HttpHeaders({'Content-Type': 'application/json'})}


    // convert userId from string to int if it exists.
    if(user != null){ let userId = parseInt(user)}
    userId =  user != null ? parseInt(user) : 4;


      return this.http.get<IOrder[]>(`${url}orders/users/filterBy?userId=${userId}&status=PENDING`, headers)

      // Subscribe on the component side.
  }

}