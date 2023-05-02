import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent {
  constructor(public bookService: BookService) {}
}
