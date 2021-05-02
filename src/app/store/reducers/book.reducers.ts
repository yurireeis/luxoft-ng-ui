import {
    EntityState,
    EntityAdapter,
    createEntityAdapter
} from '@ngrx/entity';
import { Book } from 'src/app/book/models/book';
import {
    BookActions,
    BookActionTypes
} from '../actions/book.actions';


export interface BookState extends EntityState<Book> {
    lastUpdate: Date;
}

// TODO: add new books ID (new API)
export const booksAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
    selectId: book => book.kind
});

export const initialBooksState: BookState = booksAdapter.getInitialState({
    lastUpdate: new Date()
});

export function booksReducer(
    state = initialBooksState,
    action: BookActions
): BookState {
    switch (action.type) {
        case BookActionTypes.LoadBooks:
            return booksAdapter.addMany(
                action.payload.books,
                {
                    ...state,
                    lastUpdate: new Date()
                }
            );
        default:
            return state;
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = booksAdapter.getSelectors();
