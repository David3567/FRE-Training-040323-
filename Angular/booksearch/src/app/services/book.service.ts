import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BaseUrl } from '../app.module';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Response, Book, BookItem } from './book.interface';

@Injectable()
export class BookService {
  private booklist: BookItem[] = [];
  private booklist$ = new BehaviorSubject<BookItem[]>(this.booklist);
  books$ = this.booklist$.asObservable();

  private wishlist: string[] = [];
  private wishlist$ = new BehaviorSubject<string[]>(this.wishlist);
  wishes$ = this.wishlist$.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(BaseUrl) private baseUrl: string
  ) {}

  searchBook(bookname: string) {
    return this.http.get<Response>(this.baseUrl + bookname).pipe(
      map((res) => {
        return res.items.map(({ volumeInfo: volume }: Book) => {
          return {
            bookpickture: volume.imageLinks.thumbnail,
            bookname: volume.title,
            publisher: volume.publisher,
            publishdate: volume.publishedDate,
            description: volume.description,
          };
        });
      }),
      tap((books: BookItem[]) => {
        this.booklist = books;
        this.booklist$.next(this.booklist);
        console.log(this.booklist);
      })
    );
  }

  addToWishList(name: string) {
    this.wishlist = [name, ...this.wishlist];
    this.wishlist$.next(this.wishlist);
  }
}
