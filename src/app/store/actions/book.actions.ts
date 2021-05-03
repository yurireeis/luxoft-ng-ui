import { Action } from '@ngrx/store';
import { Result } from 'src/app/models/result';


export enum BookActionTypes {
  RequestBooks = '[Books] Request Books',
  LoadBooks = '[Books] Load Books'
}

export class RequestBooksAction implements Action {
    readonly type = BookActionTypes.RequestBooks;
    constructor(public payload: { text: string }) { }
}

export class LoadBooksAction implements Action {
    readonly type = BookActionTypes.LoadBooks;
    constructor(public payload: { books: Result[], term: string }) { }
}

export type BookActions = |
    RequestBooksAction |
    LoadBooksAction;
