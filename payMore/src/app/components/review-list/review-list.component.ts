import { Component, NgModule, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';
import { WriteReviewComponent } from '../write-review/write-review.component';
import { ReviewsService } from '../../services/reviews.service';

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


  reviews: reviews[] = []

  viewReview($event: reviews){
    console.log($event.id);
    
  }

  constructor(private reviewsService: ReviewsService){

  }

  ngOnInit(){
    this.reviews = this.reviewsService.getAllReivew();
  }

}
