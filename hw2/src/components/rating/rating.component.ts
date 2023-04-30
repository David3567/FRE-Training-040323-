import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ratings-item',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  imports: [CommonModule],
})
export class RatingComponent {
  @Input() ratingObj!: { name: string; content: string; rate: number };
  FilledSymbol = `★`;
  EmptySymbol = `☆`;
  constructor() {
    CommonModule;
  }
}
