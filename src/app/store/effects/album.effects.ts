import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AlbumService } from "src/app/album/services/album.service";
import { AlbumActionTypes, LoadAlbumsAction, RequestAlbumsAction } from "../actions/album.actions";
import { AppState } from "../reducers/app.reducers";
import { catchError, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { lastAlbumSearchedTerm } from "../selectors/album.selectors";


@Injectable()
export class AlbumEffects {
    constructor(
        private actions$: Actions,
        private albumService: AlbumService,
        private store$: Store<AppState>
    ) { }

    requestAlbums$ = createEffect(() => this.actions$.pipe(
        ofType<RequestAlbumsAction>(AlbumActionTypes.RequestAlbums),
        withLatestFrom(this.store$.select(lastAlbumSearchedTerm)),
        filter(([action, term]) => term !== action.payload.text),
        mergeMap(([action, term]) => this.albumService.getAlbums(action.payload.text).pipe(
            map(albums => new LoadAlbumsAction({ albums, term: action.payload.text })),
            catchError(err => of({ type: '[Albums] Request Albums Error' }))
        ))
    ));
}
