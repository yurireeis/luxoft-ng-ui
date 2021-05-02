import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { BookService } from "src/app/book/services/book.service";
import {
    BookActionTypes,
    LoadBooksAction,
    RequestBooksAction
} from "../actions/book.actions";
import { AppState } from "../reducers/app.reducers";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';


@Injectable()
export class BookEffects {
    constructor(
        private actions$: Actions,
        private BookService: BookService,
        private store$: Store<AppState>
    ) { }

    requestBooks$ = createEffect(() => this.actions$.pipe(
        ofType<RequestBooksAction>(BookActionTypes.RequestBooks),
        mergeMap(action => this.BookService.getBooks(action.payload.text).pipe(
            map(books => new LoadBooksAction({ books })),
            catchError(err => of({ type: '[Books] Request Books Error' }))
        ))
    ));
}
