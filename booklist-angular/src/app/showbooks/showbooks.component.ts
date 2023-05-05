import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksServerService } from "../core/books-server.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-showbooks",
  templateUrl: "./showbooks.component.html",
  styleUrls: ["./showbooks.component.scss"],
})
export class ShowbooksComponent implements OnInit, OnDestroy {
  books = [];
  subscribeBookService = new Subscription();

  constructor(private booksService: BooksServerService) {}

  ngOnInit(): void {
    this.subscribeBookService = this.booksService.subjectReadignList$.subscribe(
      (data: any) => {
        console.log(data);
        this.books = data;
        console.log("books: ", this.books);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribeBookService.unsubscribe();
  }
}
