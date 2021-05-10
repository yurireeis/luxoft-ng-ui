import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { AppState } from '../store/reducers/app.reducers';
import { allBooks, hasBooks } from '../store/selectors/books.selectors';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  books$: Observable<Result[]> = this.store$.select(allBooks);
  hasBooks$: Observable<boolean> = this.store$.select(hasBooks);
  feedbackMessage = "no books found";
  constructor(private store$: Store<AppState>) { }
}
