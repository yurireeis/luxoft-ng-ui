import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RequestBooksAction } from '../store/actions/book.actions';
import { AppState } from '../store/reducers/app.reducers';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  placeholder = 'look for something';

  constructor(private store$: Store<AppState>) { }

  lookForBooks(text: string) {
    this.store$.dispatch(new RequestBooksAction({ text }));
  }
}
