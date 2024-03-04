import { Injectable } from '@angular/core';
import { reviews } from '../interfaces/reviewsInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  reviews: reviews[] = []


  getAllReivew(id: number): Observable<reviews[]>{

    return this.http.get<reviews[]>(`http://localhost:8080/reviews/filterBy?productId=${id}`);

  }

  writeReview(rating: number, content: string, productId: number){

    let headers = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
    }
    
    return this.http.post(`http://localhost:8080/reviews`,
                  JSON.stringify({rating, content, productId}),
                  headers);

  }



  constructor(private http:HttpClient) { }
}
