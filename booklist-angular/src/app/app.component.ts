import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'ebay-react-interview';

  getBookName(name: string) {
    console.log('name: ', name);
  }
}
