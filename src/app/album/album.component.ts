import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RequestAlbumsAction } from '../store/actions/album.actions';
import { AppState } from '../store/reducers/app.reducers';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  placeholder = 'look for something';

  constructor(private store$: Store<AppState>) { }

  lookForAlbum(text: string) {
    this.store$.dispatch(new RequestAlbumsAction({ text }));
  }
}
