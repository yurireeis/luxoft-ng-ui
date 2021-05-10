import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuTabs } from './enums/tab.enum';
import { Result } from './models/result';
import { RequestAlbumsAction } from './store/actions/album.actions';
import { RequestBooksAction } from './store/actions/book.actions';
import { AppState } from './store/reducers/app.reducers';
import { albumsQuantity, allAlbums } from './store/selectors/album.selectors';
import { booksQuantity } from './store/selectors/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'luxoft-test-ui';
  booksQuantity$: Observable<number> = this.store$.select(booksQuantity);
  albumsQuantity$: Observable<number> = this.store$.select(albumsQuantity);

  constructor(
    private router: Router,
    private store$: Store<AppState>
  ) { }

  placeholder = 'type some text and press enter to search';
  albums$: Observable<Result[]> = this.store$.select(allAlbums);

  lookForAlbumsOrBooks(text: any) {
    this.store$.dispatch(new RequestAlbumsAction({ text }));
    this.store$.dispatch(new RequestBooksAction({ text }));
  }

  tabClick(event: MatTabChangeEvent): Promise<boolean> {
    let uri = null;
    switch(event.index) {
      case MenuTabs.ALBUMS:
        uri = '/albums';
        break;
      case MenuTabs.BOOKS:
        uri = '/books';
        break;
      default:
        uri = '/';
        break;
    }
    return this.router.navigateByUrl(uri);
  }
}
