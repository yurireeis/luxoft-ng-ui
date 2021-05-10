import {
    createSelector,
    createFeatureSelector
} from '@ngrx/store';
import * as fromOSsReducer from '../reducers/album.reducers';
import { AlbumState } from '../reducers/album.reducers';


export const albumsState = createFeatureSelector<AlbumState>('albums');

export const albumIsLoading = createSelector(
    albumsState,
    (state) => state && state.loading
);

export const allAlbums = createSelector(
    albumsState,
    fromOSsReducer.selectAll
);

export const albumsQuantity = createSelector(
    allAlbums,
    (albums) => albums && albums.length
);

export const hasAlbums = createSelector(
    albumsState,
    (albums): boolean => Boolean(albums.ids.length)
);
