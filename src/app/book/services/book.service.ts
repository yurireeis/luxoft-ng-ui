import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from 'src/app/models/result';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.searchApiUrl;

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Result[]> {
    return this.httpClient.get<Result[]>(`${this.url}/books?term=${term}`);
  }
}
