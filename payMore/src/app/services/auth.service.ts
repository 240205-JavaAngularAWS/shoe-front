import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SUser } from '../interfaces/SUser'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // loginUser(username: string, password: string) {
  //   sessionStorage.removeItem('username');

  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-Type':'application/json',
  //     })
  //   }

  //   return this.http.post<SUser>(`http://localhost:4200/loginUser`, 
  //     JSON.stringify({username, password}),
  //     headers)
  // }

  // validateLoggedIn(): boolean {
  //   return (!! sessionStorage.getItem('username'))
  // }



  constructor() { }
}
