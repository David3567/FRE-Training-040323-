import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.scss'],
})
export class ShowNameComponent {
  namelist: string[] = ['hello'];

  constructor(private bookService: BookService) {
    this.bookService.wishes$.subscribe((name) => {
      this.namelist = name;
    });
  }
}
