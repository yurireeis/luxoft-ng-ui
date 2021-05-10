import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';
import * as fromOSsReducer from '../reducers/book.reducers';
import { BookState } from '../reducers/book.reducers';


export const booksState = createFeatureSelector<BookState>('books');

export const bookIsLoading = createSelector(
    booksState,
    (state) => state && state.loading
);

export const allBooks = createSelector(
    booksState,
    fromOSsReducer.selectAll
);

export const booksQuantity = createSelector(
    allBooks,
    (books) => books && books.length
);

export const hasBooks = createSelector(
    booksState,
    (books): boolean => Boolean(books.ids.length)
);
