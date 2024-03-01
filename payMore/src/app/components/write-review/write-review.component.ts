import { Component, EventEmitter, Output, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-write-review',
  standalone: true,
  templateUrl: './write-review.component.html',
  imports: [NgbRatingModule, FormsModule],
  styleUrl: './write-review.component.css'
})
export class WriteReviewComponent {
  /*@input()*/ review: string = "";
  // @Output() reviewChange = new EventEmitter<string>{};
  rating: number = 5;
  errorMessageHidden: boolean = true;

  toReviewList(){

    // this.review
    // this.reviewChange.emit(this.review)

    if(!this.review) {
      this.errorMessageHidden = false;
      return;
    }

    // this.authService.writeReview(this.review, this.rating);

    this.router.navigate(['reviewList'])
  }

  constructor(private router: Router, private authService: AuthService){

  }

  // reviews: reviews[] = [
  //   {
  //     id: 1,
  //     product: {
  //         id: 1,
  //         price: 2.50,
  //         color: "black",
  //         gender: "female",
  //         category: "sneaker",
  //         quantity: 1
  //     },
  //     content: "hello world",
  //     rating: 1
  //   },
  //   {
  //     id: 2,
  //     product: {
  //         id: 2,
  //         price: 2.50,
  //         color: "black",
  //         gender: "female",
  //         category: "sneaker",
  //         quantity: 1
  //     },
  //     content: "not good",
  //     rating: 1
  //   },
  //   {
  //     id: 3,
  //     product: {
  //         id: 3,
  //         price: 2.50,
  //         color: "black",
  //         gender: "female",
  //         category: "sneaker",
  //         quantity: 1
  //     },
  //     content: "great product",
  //     rating: 1
  //   }
  // ]
  
}
