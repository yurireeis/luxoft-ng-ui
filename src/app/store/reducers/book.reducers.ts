import {
    EntityState,
    EntityAdapter,
    createEntityAdapter
} from '@ngrx/entity';
import { Result } from 'src/app/models/result';
import {
    BookActions,
    BookActionTypes
} from '../actions/book.actions';


export interface BookState extends EntityState<Result> {
    lastUpdate: Date;
    loading: boolean;
}

export const booksAdapter: EntityAdapter<Result> = createEntityAdapter<Result>({
    selectId: book => book.id
});

export const initialBooksState: BookState = booksAdapter.getInitialState({
    lastUpdate: new Date(),
    loading: false
});

export function booksReducer(
    state = initialBooksState,
    action: BookActions
): BookState {
    switch (action.type) {
        case BookActionTypes.LoadBooks:
            return booksAdapter.setAll(
                action.payload.books,
                {
                    ...state,
                    lastUpdate: new Date()
                }
            );
        case BookActionTypes.BookIsLoading:
            return Object.assign({}, state, { loading: action.payload.isLoading });
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
