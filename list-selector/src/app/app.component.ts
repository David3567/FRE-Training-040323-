import { Component } from '@angular/core';
import { Card } from './model/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'list-selector';
  data: Card | null = null;

  onSelectedElement(card: Card) {
    this.data = card;
  }
}
