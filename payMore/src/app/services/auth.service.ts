import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SUser } from '../interfaces/SUser'; 
import { IRegisterUser } from '../interfaces/IRegisterUser'; 
import { IRegisterSeller } from '../interfaces/IRegisterSeller';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  userRegister(userData: any): Observable<any> {
    const url = `${this.baseUrl}/registerUser`;
    return this.http.post<any>(url, userData).pipe(
      catchError((error) => {
        console.error('Error registering user', error);
        return throwError(() => new Error(error));
      })
    );
  }

  sellerRegister(sellerData: any): Observable<any> {
    const url = `${this.baseUrl}/registerSeller`;
    return this.http.post<any>(url, sellerData).pipe(
      catchError((error) => {
        console.error('Error registering seller:', error);
        return throwError(() => new Error(error));
      })
    )
  }

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

}
  // //Register Users
  // registerUsers: IRegisterUser[] = [
  //   {
  //     firstName: 'matt',
  //     lastName: 'flug',
  //     userName: 'matty',
  //     password: 'password',
  //     email: 'm@gmail',
  //   },
  //   {
  //     firstName: 'matt1',
  //     lastName: 'flug1',
  //     userName: 'matty1',
  //     password: 'password1',
  //     email: 'm1@gmail',
  //   },
  //   {
  //     firstName: 'matt2',
  //     lastName: 'flug2',
  //     userName: 'matty2',
  //     password: 'password2',
  //     email: 'm2@gmail',
  //   },
  // ];
  // userRegister(
  //   firstName: string,
  //   lastName: string,
  //   userName: string,
  //   password: string,
  //   email: string
  // ) {
  //   sessionStorage.removeItem('userName');
  //   for (let registerUser of this.registerUsers) {
  //     if (
  //       registerUser.firstName == firstName &&
  //       registerUser.lastName == lastName &&
  //       registerUser.userName == userName &&
  //       registerUser.password == password &&
  //       registerUser.email == email
  //     ) {
  //       sessionStorage.setItem('userName', userName);
  //     }
  //   }
  // }
  // validateRegisterUser(): boolean {
  //   return !!sessionStorage.getItem('userName');
  // }
  // // Register Sellers
  // registerSellers: IRegisterSeller[] = [
  //   {
  //     companyName: 'company',
  //     userName: 'company',
  //     password: 'password',
  //     email: 'company@gmail',
  //     address: '100 Pearl St.',
  //     city: 'denver',
  //     state: 'co',
  //     zipCode: '80209',
  //   },
  //   {
  //     companyName: 'company1',
  //     userName: 'company1',
  //     password: 'password1',
  //     email: 'company1@gmail',
  //     address: '101 Pearl St.',
  //     city: 'denver',
  //     state: 'co',
  //     zipCode: '80209',
  //   },
  //   {
  //     companyName: 'company2',
  //     userName: 'company2',
  //     password: 'password2',
  //     email: 'company2@gmail',
  //     address: '102 Pearl St.',
  //     city: 'denver',
  //     state: 'co',
  //     zipCode: '80209',
  //   },
  // ];
  // sellerRegister(
  // companyName: string,
  // userName: string,
  // password: string,
  // email: string,
  // address: any,
  // city: string,
  // state: string,
  // zipCode: string
  // ) {
  //   sessionStorage.removeItem('userName');
  //   for (let registerSeller of this.registerSellers) {
  //     if (
  //       registerSeller.companyName == companyName &&
  //       registerSeller.userName == userName &&
  //       registerSeller.password == password &&
  //       registerSeller.email == email &&
  //       registerSeller.address == address &&
  //       registerSeller.city == city &&
  //       registerSeller.state == state &&
  //       registerSeller.zipCode == zipCode
  //     ) {
  //       sessionStorage.setItem('userName', userName);
  //     }
  //   }
  // }
  // validateRegisterSeller(): boolean {
  //   return !!sessionStorage.getItem('userName');
  // }


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