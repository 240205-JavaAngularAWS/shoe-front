import { Component, EventEmitter, Input, Output } from '@angular/core';
import { reviews } from '../../interfaces/reviewsInterface';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  @Input() reviewInputted: reviews = {
    id: 0,
    product: {
      id: 0
    },
    content: '',
    rating: 0
  }

  @Output() viewReview = new EventEmitter();

  viewTodo(){
    console.log("attempting to view item with ID: " + this.reviewInputted.id);
    this.viewReview.emit(this.reviewInputted);
  }
}
