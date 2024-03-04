import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SUser } from '../interfaces/SUser'; 
import { IRegisterUser } from '../interfaces/IRegisterUser'; 
import { IRegisterSeller } from '../interfaces/IRegisterSeller';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: SUser[] = [
    // {
    //   username: 'eric',
    //   password: 'password',
    // },
    // {
    //   username: 'user1',
    //   password: 'password',
    // },
    // {
    //   username: 'user2',
    //   password: 'password',
    // },
  ];
  loginUser(username: string, password: string) {
    sessionStorage.removeItem('username');
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
        return this.http.post<SUser>(`http://localhost:8080/loginUser`, 
      JSON.stringify({username, password}),
      headers)
  }
  loginSeller(username: string, password: string) {
    sessionStorage.removeItem('username');
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
        return this.http.post<SUser>(`http://localhost:8080/loginSeller`, 
      JSON.stringify({username, password}),
      headers)
  }

  validateLoggedIn(): boolean {
    return !!sessionStorage.getItem('username');
  }
  // Register Users
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
  userRegister(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    email: string
  ) {
    sessionStorage.removeItem('userName');
    for (let registerUser of this.registerUsers) {
      if (
        registerUser.firstName == firstName &&
        registerUser.lastName == lastName &&
        registerUser.userName == userName &&
        registerUser.password == password &&
        registerUser.email == email
      ) {
        sessionStorage.setItem('userName', userName);
      }
    }
  }
  validateRegisterUser(): boolean {
    return !!sessionStorage.getItem('userName');
  }
  // Register Sellers
  registerSellers: IRegisterSeller[] = [
    {
      companyName: 'company',
      userName: 'company',
      password: 'password',
      email: 'company@gmail',
      address: '100 Pearl St.',
      city: 'denver',
      state: 'co',
      zipCode: '80209',
    },
    {
      companyName: 'company1',
      userName: 'company1',
      password: 'password1',
      email: 'company1@gmail',
      address: '101 Pearl St.',
      city: 'denver',
      state: 'co',
      zipCode: '80209',
    },
    {
      companyName: 'company2',
      userName: 'company2',
      password: 'password2',
      email: 'company2@gmail',
      address: '102 Pearl St.',
      city: 'denver',
      state: 'co',
      zipCode: '80209',
    },
  ];
  sellerRegister(
  companyName: string,
  userName: string,
  password: string,
  email: string,
  address: any,
  city: string,
  state: string,
  zipCode: string
  ) {
    sessionStorage.removeItem('userName');
    for (let registerSeller of this.registerSellers) {
      if (
        registerSeller.companyName == companyName &&
        registerSeller.userName == userName &&
        registerSeller.password == password &&
        registerSeller.email == email &&
        registerSeller.address == address &&
        registerSeller.city == city &&
        registerSeller.state == state &&
        registerSeller.zipCode == zipCode
      ) {
        sessionStorage.setItem('userName', userName);
      }
    }
  }
  validateRegisterSeller(): boolean {
    return !!sessionStorage.getItem('userName');
  }

  constructor(private http: HttpClient) {}
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