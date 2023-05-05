import { Component, Input, OnInit } from '@angular/core';
import { BooksServerService } from '../core/books-server.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  providers: [BooksServerService]
})
export class BookCardComponent implements OnInit {

  @Input() book: any;

  constructor() { }

  ngOnInit(): void {
  }

}
