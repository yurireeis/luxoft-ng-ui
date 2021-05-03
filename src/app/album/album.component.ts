import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { RequestAlbumsAction } from '../store/actions/album.actions';
import { RequestBooksAction } from '../store/actions/book.actions';
import { AppState } from '../store/reducers/app.reducers';
import { allAlbums } from '../store/selectors/album.selectors';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  placeholder = 'look for something';
  albums$: Observable<Result[]> = this.store$.select(allAlbums);

  constructor(private store$: Store<AppState>) { }

  lookForAlbums(text: string) {
    this.store$.dispatch(new RequestAlbumsAction({ text }));
    this.store$.dispatch(new RequestBooksAction({ text }));
  }
}
