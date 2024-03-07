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
  private baseUrl = 'http://ec2-54-144-33-180.compute-1.amazonaws.com';

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


  loginUser(username: string, password: string) {
    sessionStorage.removeItem('username');
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
        return this.http.post<SUser>(`${this.baseUrl}/loginUser`, 
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
        return this.http.post<SUser>(`${this.baseUrl}/loginSeller`, 
      JSON.stringify({username, password}),
      headers)
  }

  validateLoggedIn(): boolean {
    return !!sessionStorage.getItem('id');
  }

}
  
 





