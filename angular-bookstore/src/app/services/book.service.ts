import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/book";
  constructor(private httpClient: HttpClient) { }
  getBooks(): Observable<book[]> {
    return this.httpClient.get<getResponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    );
  }
}

interface getResponseBooks {
  _embedded: {
    books: book[];
  }
}