import { Component, Input } from '@angular/core';
import { Card } from 'src/app/model/card.interface';

@Component({
  selector: 'app-side-view',
  templateUrl: './side-view.component.html',
  styleUrls: ['./side-view.component.scss']
})
export class SideViewComponent {
  @Input() card: Card | null = null;
}
