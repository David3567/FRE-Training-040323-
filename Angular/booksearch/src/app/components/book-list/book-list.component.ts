import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/services/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: BookItem[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe((books) => {
      this.books = books;
    });
  }

  addToWishList(name: string) {
    console.log(111);
    this.bookService.addToWishList(name);
  }
}
