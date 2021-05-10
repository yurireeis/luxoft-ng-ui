import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "src/app/book/services/book.service";
import {
    BookActionTypes,
    BookIsLoadingAction,
    LoadBooksAction,
    RequestBooksAction
} from "../actions/book.actions";
import { catchError, finalize, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
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
        tap(() => this.store$.dispatch(new BookIsLoadingAction({ isLoading: true }))),
        mergeMap(action => this.BookService.getBooks(action.payload.text).pipe(
            map(books => new LoadBooksAction({ books })),
            catchError(err => of({ type: '[Books] Request Books Error' })),
            finalize(() => this.store$.dispatch(new BookIsLoadingAction({ isLoading: false })))
        ))
    ));
}
