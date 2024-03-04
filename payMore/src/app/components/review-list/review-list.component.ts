import { Component, NgModule, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';
import { WriteReviewComponent } from '../write-review/write-review.component';
import { ReviewsService } from '../../services/reviews.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'reviewList',
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

  constructor(private reviewsService: ReviewsService, private activateRoute: ActivatedRoute){

  }

  ngOnInit(){
    let productId: number = Number(this.activateRoute.snapshot.params['productId']);
    console.log(productId);
    this.reviewsService.getAllReivew(productId)
      .subscribe((data) => {
      this.reviews = data
    });
  }

}
