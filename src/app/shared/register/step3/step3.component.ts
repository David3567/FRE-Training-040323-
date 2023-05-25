import { Component } from '@angular/core';
import { plans } from '../step3/interface';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  plans : plans[] = [
    {
      info: ["Monthly price", "$6.99", "$15.49", "19.99"],
      red: false,
      index: 0,
    }, {
      info : ["Video quality", "Great", "Great", "Best"],
      red: false,
      index: 0,
    }, {
      info : ["Resolution", "1080p", "1080p", "4K+HDR"],
      red: false,
      index: 0,
    }, {
      info : ["Watch on your TV, computer, mobile phone and tablet", "✓", "✓", "✓"],
      red: false,
      index: 0,
    }, {
      info : ["Downloads", "—", "✓", "✓"],
      red: false,
      index: 0,
    }
  ]

  redIt(data : number) {
    for (let pos in this.plans) {
      if (parseInt(pos) == data) {
        this.plans[pos].red = true;
        this.plans[pos].index = data;
      } else {
        this.plans[pos].red = false;
        this.plans[pos].index = data;
      }
    }
  }
}
