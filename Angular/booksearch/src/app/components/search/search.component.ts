import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Subject,
  Subscription,
  debounceTime,
  fromEvent,
  mergeMap,
  of,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { BaseUrl } from 'src/app/app.module';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;
  bookname = '';

  private notifier = new Subject();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        mergeMap((_) => {
          return this.bookService.searchBook(this.bookname);
        }),
        takeUntil(this.notifier)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unSubscribe();
  }

  unSubscribe() {
    this.notifier.next(null);
    this.notifier.complete();
  }
}
