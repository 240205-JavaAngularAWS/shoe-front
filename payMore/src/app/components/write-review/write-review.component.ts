import { Component, EventEmitter, Output, input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { reviews } from '../../interfaces/reviewsInterface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'writeReview',
  templateUrl: './write-review.component.html',
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
  
}
