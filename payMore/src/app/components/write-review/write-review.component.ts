import { Component, EventEmitter, Output, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'writeReview',
  templateUrl: './write-review.component.html',
  styleUrl: './write-review.component.css'
})
export class WriteReviewComponent {
  review: string = "";

  rating: number = 5;
  errorMessageHidden: boolean = true;

  postReview(){
    let productId: number = Number(this.activateRoute.snapshot.params['productId']);


    if(!this.review) {
      this.errorMessageHidden = false;
      return;
    }

    this.errorMessageHidden = true;
    console.log("Thank you for your review!");
    console.log(this.rating);
    console.log(this.review);
    console.log(productId);

    this.reviewsService.writeReview(this.rating, this.review, productId).subscribe((data)=>{
      location.reload();
    });

  }

  constructor(private router: Router, private authService: AuthService, private reviewsService: ReviewsService, private activateRoute: ActivatedRoute){
    
  }

  ngOnInit(){
  }
  
}
