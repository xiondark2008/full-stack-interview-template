import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './app.component.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHelloWorld(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/hello`);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getMoviesSortedByTitle(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies/byTitle`);
  }

  getMoviesSortedByDirector(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies/byDirector`);
  }

  getMoviesSortedByReleaseDate(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies/byReleaseDate`);
  }
}
