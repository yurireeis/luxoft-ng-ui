import {
    Action,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { albumsReducer } from './album.reducers';
import { booksReducer } from './book.reducers';


// tslint:disable-next-line:no-empty-interface
export interface AppState { }

export const appReducers: ActionReducerMap<AppState> = {
    albums: albumsReducer,
    books: booksReducer
};

const prodMetaReducers: MetaReducer<any, Action>[] = [];
const devMetaReducers: MetaReducer<any, Action>[] = [];

export const metaReducers: MetaReducer<any>[] = !environment.production ? devMetaReducers : prodMetaReducers;
