import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/album/models/album';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private httpClient: HttpClient) { }

  getAlbums(term: string): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`https://itunes.apple.com/search?term=${term}`);
  }
}
