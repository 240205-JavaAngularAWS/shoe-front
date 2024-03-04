import { Injectable } from '@angular/core';
import { reviews } from '../interfaces/reviewsInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  reviews: reviews[] = [
    // {
    //   id: 1,
    //   product: {
    //       id: 3,
    //       price: 2.50,
    //       color: "black",
    //       gender: "female",
    //       category: "sneaker",
    //       quantity: 1
    //   },
    //   content: "ok.",
    //   rating: 3
    // },
    // {
    //   id: 2,
    //   product: {
    //       id: 3,
    //       price: 2.50,
    //       color: "black",
    //       gender: "female",
    //       category: "sneaker",
    //       quantity: 1
    //   },
    //   content: "Terrible!",
    //   rating: 1
    // },
    // {
    //   id: 3,
    //   product: {
    //       id: 3,
    //       price: 2.50,
    //       color: "black",
    //       gender: "female",
    //       category: "sneaker",
    //       quantity: 1
    //   },
    //   content: "great product!",
    //   rating: 5
    // }
  ]

  // this is for when user clicks on a single review to view it
  // getSingleReview(id: number){
  //   sessionStorage.removeItem("reviewId");

  //   for (let review of this.reviews){
  //     if(review.product.id === id){
  //       sessionStorage.setItem("productId", id.toString());
  //       console.log("productId =" + id);
  //     }
  //   }
  // }

  // this is for populating the reviews
  // verifySingleReivew(): reviews[]{

  //   let id: string | null = sessionStorage.getItem("reviewId");

  //   if (id){
  //     return this.reviews.filter((review)=>{
  //       if (review.id == Number(id)){
  //         return true;
  //       }
  //       return false;
  //     })
  //   }

  //   return []
  // }

  getAllReivew(id: number): Observable<reviews[]>{
    // return this.reviews;
    // this.http.get<reviews>(`http://localhost:8080/reviews/filterBy?productId=${id}`)

    return this.http.get<reviews[]>(`http://localhost:8080/reviews/filterBy?productId=${id}`);

  }

  writeReview(){

  }



  constructor(private http:HttpClient) { }
}
