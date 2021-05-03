import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "src/app/book/services/book.service";
import {
    BookActionTypes,
    LoadBooksAction,
    RequestBooksAction
} from "../actions/book.actions";
import { catchError, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { lastAlbumSearchedTerm } from "../selectors/album.selectors";
import { AppState } from "../reducers/app.reducers";
import { Store } from "@ngrx/store";


@Injectable()
export class BookEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private BookService: BookService
    ) { }

    requestBooks$ = createEffect(() => this.actions$.pipe(
        ofType<RequestBooksAction>(BookActionTypes.RequestBooks),
        withLatestFrom(this.store$.select(lastAlbumSearchedTerm)),
        filter(([action, term]) => term !== action.payload.text),
        mergeMap(([action, term]) => this.BookService.getBooks(action.payload.text).pipe(
            map(books => new LoadBooksAction({ books, term: action.payload.text })),
            catchError(err => of({ type: '[Books] Request Books Error' }))
        ))
    ));
}
