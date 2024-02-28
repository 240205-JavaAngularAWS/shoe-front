import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SUser } from '../interfaces/SUser'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: SUser[] = [
    {
      username: "eric",
      password: "password"
    },
    {
      username: "user1",
      password: "password"
    },
    {
      username: "user2",
      password: "password"
    },
  ]
  loginUser(username: string, password: string){

    sessionStorage.removeItem('username');
    for(let user of this.users) {
      if(user.username == username && user.password == password) {
        sessionStorage.setItem("username", username);
      }
    }
  }
  validateLoggedIn(): boolean {
    return (!! sessionStorage.getItem('username'))
  }



  constructor() { }
}




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