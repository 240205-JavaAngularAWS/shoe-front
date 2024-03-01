import { Component, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {

  // @input() reviewInputted: reviews = {
  //   id: 0,
  //   product: {
  //       id: 0
  //   },
  //   content: "",
  //   rating: 0
  // }

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

}
