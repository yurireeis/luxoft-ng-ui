import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { RequestAlbumsAction } from '../store/actions/album.actions';
import { RequestBooksAction } from '../store/actions/book.actions';
import { AppState } from '../store/reducers/app.reducers';
import { allBooks } from '../store/selectors/books.selectors';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  placeholder = 'look for something';
  books$: Observable<Result[]> = this.store$.select(allBooks);

  constructor(private store$: Store<AppState>) { }

  lookForBooks(text: string) {
    this.store$.dispatch(new RequestBooksAction({ text }));
    this.store$.dispatch(new RequestAlbumsAction({ text }));
  }
}
