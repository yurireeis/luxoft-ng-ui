import {
    EntityState,
    EntityAdapter,
    createEntityAdapter
} from '@ngrx/entity';
import { Result } from 'src/app/models/result';
import {
    AlbumActions,
    AlbumActionTypes
} from '../actions/album.actions';


export interface AlbumState extends EntityState<Result> {
    lastUpdate: Date;
    loading: false
}

export const albumsAdapter: EntityAdapter<Result> = createEntityAdapter<Result>({
    selectId: album => album.id
});

export const initialAlbumsState: AlbumState = albumsAdapter.getInitialState({
    lastUpdate: new Date(),
    loading: false
});

export function albumsReducer(
    state = initialAlbumsState,
    action: AlbumActions
): AlbumState {
    switch (action.type) {
        case AlbumActionTypes.LoadAlbums:
            return albumsAdapter.setAll(
                action.payload.albums,
                {
                    ...state,
                    lastUpdate: new Date()
                }
            );
        case AlbumActionTypes.AlbumIsLoading:
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
} = albumsAdapter.getSelectors();
