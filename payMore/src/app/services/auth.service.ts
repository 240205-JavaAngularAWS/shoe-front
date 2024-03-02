import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SUser } from '../interfaces/SUser'; 
import { IRegisterUser } from '../interfaces/IRegisterUser'; 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: SUser[] = [
    {
      username: 'eric',
      password: 'password',
    },
    {
      username: 'user1',
      password: 'password',
    },
    {
      username: 'user2',
      password: 'password',
    },
  ];
  loginUser(username: string, password: string) {
    sessionStorage.removeItem('username');
    for (let user of this.users) {
      if (user.username == username && user.password == password) {
        sessionStorage.setItem('username', username);
      }
    }
  }
  validateLoggedIn(): boolean {
    return !!sessionStorage.getItem('username');
  }

  registerUsers: IRegisterUser[] = [
    {
      firstName: 'matt',
      lastName: 'flug',
      userName: 'matty',
      password: 'password',
      email: 'm@gmail',
    },
    {
      firstName: 'matt1',
      lastName: 'flug1',
      userName: 'matty1',
      password: 'password1',
      email: 'm1@gmail',

    },
    {
      firstName: 'matt2',
      lastName: 'flug2',
      userName: 'matty2',
      password: 'password2',
      email: 'm2@gmail',
    },
  ];
  userRegister(username: string, password: string) {
    sessionStorage.removeItem('username');
    for (let user of this.users) {
      if (user.username == username && user.password == password) {
        sessionStorage.setItem('username', username);
      }
    }
  }
  validateRegisterUser(): boolean {
    return !!sessionStorage.getItem('username');
  }

  constructor() {}
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