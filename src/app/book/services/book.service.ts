import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/book/models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`https://www.googleapis.com/books/v1/volumes?q=${term}`);
  }
}
