import {
    EntityState,
    EntityAdapter,
    createEntityAdapter
} from '@ngrx/entity';
import { Album } from 'src/app/album/models/album';
import {
    AlbumActions,
    AlbumActionTypes
} from '../actions/album.actions';


export interface AlbumState extends EntityState<Album> {
    lastUpdate: Date;
}

// TODO: add new albums ID (new API)
export const albumsAdapter: EntityAdapter<Album> = createEntityAdapter<Album>({
    selectId: album => album.resultCount.toString()
});

export const initialAlbumsState: AlbumState = albumsAdapter.getInitialState({
    lastUpdate: new Date()
});

export function albumsReducer(
    state = initialAlbumsState,
    action: AlbumActions
): AlbumState {
    switch (action.type) {
        case AlbumActionTypes.LoadAlbums:
            return albumsAdapter.addMany(
                action.payload.albums,
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
} = albumsAdapter.getSelectors();
