import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, catchError } from "rxjs/operators";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BooksServerService {
  private readonly rooturl = "https://www.googleapis.com/books/v1/volumes?q=";
  private readonly header = {
    headers: { "content-type": "application/json" },
  };

  readingWishList = [];
  booklist = [];

  subjectBooks$ = new BehaviorSubject(this.booklist); // Subject()

  subjectReadignList$ = new BehaviorSubject(this.readingWishList);
  // subjectReadignList$ = new Subject();

  constructor(private http: HttpClient) {}

  // for search books
  searchBooksByName(name: string): void {
    if (name === "") {
      return;
    }
    this.http
      .get([this.rooturl, name].join(""), this.header)
      .pipe(
        map((data: any) => data.items),
        catchError(this.handleError)
      )
      .subscribe((data) => {
        this.booklist = data;
        this.subjectBooks$.next(this.booklist);
      });
  }

  getBooks(): Observable<any> {
    return this.subjectBooks$.asObservable();
  }

  getWishList() {
    return this.subjectReadignList$.asObservable();
  }

  // logic for wishlist
  pushIntoReadingList(book: any) {
    const findBookInReadingList = this.readingWishList.find(
      (readingbook) => readingbook.id === book.id
    );

    if (!findBookInReadingList) {
      this.readingWishList = [...this.readingWishList, book];
    }
    this.subjectReadignList$.next(this.readingWishList); // <--------
  }

  deleteFromReadingList(book: any) {
    const deletedBookFromReadingList = this.readingWishList.filter(
      (readingbook) => readingbook.id !== book.id
    );
    this.readingWishList = deletedBookFromReadingList;
    this.subjectReadignList$.next(this.readingWishList);
  }

  getReadingList(): Observable<any> {
    return this.subjectReadignList$.asObservable();
  }

  // handleError
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
