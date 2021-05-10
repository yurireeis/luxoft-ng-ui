import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { AppState } from '../store/reducers/app.reducers';
import { allAlbums, hasAlbums } from '../store/selectors/album.selectors';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  albums$: Observable<Result[]> = this.store$.select(allAlbums);
  hasAlbums$: Observable<boolean> = this.store$.select(hasAlbums);
  feedbackMessage = "no albums found";
  constructor(private store$: Store<AppState>) { }
}
