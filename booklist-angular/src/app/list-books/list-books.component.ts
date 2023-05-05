import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksServerService } from '../core/books-server.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit, OnDestroy {

  books = [];
  subscribeBookService: Subscription;

  constructor(private booksService: BooksServerService) { }

  ngOnInit(): void {
    this.subscribeBookService = this.booksService.getBooks().subscribe(data => {
      this.books = data;
      console.log('books: ', this.books);
    });
  }

  ngOnDestroy(): void {
    this.subscribeBookService.unsubscribe();
  }

  addBookToWishList(book: any) {
    this.booksService.pushIntoReadingList(book);
  }

}
