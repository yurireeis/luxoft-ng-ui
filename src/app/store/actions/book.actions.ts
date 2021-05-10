import { Action } from '@ngrx/store';
import { Result } from 'src/app/models/result';


export enum BookActionTypes {
  RequestBooks = '[Books] Request Books',
  LoadBooks = '[Books] Load Books',
  BookIsLoading = '[App] Book is Loading'
}

export class RequestBooksAction implements Action {
    readonly type = BookActionTypes.RequestBooks;
    constructor(public payload: { text: string }) { }
}

export class LoadBooksAction implements Action {
    readonly type = BookActionTypes.LoadBooks;
    constructor(public payload: { books: Result[] }) { }
}

export class BookIsLoadingAction implements Action {
    readonly type = BookActionTypes.BookIsLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export type BookActions = |
    RequestBooksAction |
    LoadBooksAction |
    BookIsLoadingAction;
