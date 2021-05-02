import { Action } from '@ngrx/store';
import { Album } from 'src/app/album/models/album';


export enum AlbumActionTypes {
  RequestAlbums = '[Albums] Request Albums',
  LoadAlbums = '[Albums] Load Albums'
}

export class RequestAlbumsAction implements Action {
    readonly type = AlbumActionTypes.RequestAlbums;
    constructor(public payload: { text: string }) { }
}

export class LoadAlbumsAction implements Action {
    readonly type = AlbumActionTypes.LoadAlbums;
    constructor(public payload: { albums: Album[] }) { }
}

export type AlbumActions = |
    RequestAlbumsAction |
    LoadAlbumsAction;
