import { Component, NgModule, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';
import { WriteReviewComponent } from '../write-review/write-review.component';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  // imports: [WriteReviewComponent],
  styleUrl: './review-list.component.css'
})

// @NgModule({
//   imports: [WriteReviewComponent],
// })

export class ReviewListComponent {


  reviews: reviews[] = [
    {
      id: 1,
      product: {
          id: 1,
          price: 2.50,
          color: "black",
          gender: "female",
          category: "sneaker",
          quantity: 1
      },
      content: "hello world",
      rating: 1
    },
    {
      id: 2,
      product: {
          id: 2,
          price: 2.50,
          color: "black",
          gender: "female",
          category: "sneaker",
          quantity: 1
      },
      content: "not good",
      rating: 1
    },
    {
      id: 3,
      product: {
          id: 3,
          price: 2.50,
          color: "black",
          gender: "female",
          category: "sneaker",
          quantity: 1
      },
      content: "great product",
      rating: 1
    }
  ]

  viewReview($event: reviews){
    console.log($event.id);
  }

}
