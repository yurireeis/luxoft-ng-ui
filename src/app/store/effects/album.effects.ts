import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AlbumService } from "src/app/album/services/album.service";
import { AlbumActionTypes, AlbumIsLoadingAction, LoadAlbumsAction, RequestAlbumsAction } from "../actions/album.actions";
import { AppState } from "../reducers/app.reducers";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AlbumEffects {
    constructor(
        private actions$: Actions,
        private albumService: AlbumService,
        private store$: Store<AppState>
    ) { }

    requestAlbums$ = createEffect(() => this.actions$.pipe(
        ofType<RequestAlbumsAction>(AlbumActionTypes.RequestAlbums),
        tap(() => this.store$.dispatch(new AlbumIsLoadingAction({ isLoading: true }))),
        mergeMap(action => this.albumService.getAlbums(action.payload.text).pipe(
            map(albums => new LoadAlbumsAction({ albums })),
            catchError(err => of({ type: '[Albums] Request Albums Error' })),
            tap(() => this.store$.dispatch(new AlbumIsLoadingAction({ isLoading: false })))
        ))
    ));
}
