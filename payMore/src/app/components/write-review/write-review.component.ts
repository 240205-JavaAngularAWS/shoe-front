import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-write-review',
  standalone: true,
  templateUrl: './write-review.component.html',
  imports: [NgbRatingModule],
  styleUrl: './write-review.component.css'
})
export class WriteReviewComponent {
  rating = 5;
}
