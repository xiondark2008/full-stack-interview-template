import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHelloWorld(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/hello`);
  }

  getMovies() {

    //TODO: Replace this with a call to the backend
    return [{"title":"A New Hope","director":"George Lucas","releaseDate":"1977-05-25"},{"title":"Attack of the Clones","director":"George Lucas","releaseDate":"2002-05-16"},{"title":"Return of the Jedi","director":"Richard Marquand","releaseDate":"1983-05-25"},{"title":"Revenge of the Sith","director":"George Lucas","releaseDate":"2005-05-19"},{"title":"The Empire Strikes Back","director":"Irvin Kershner","releaseDate":"1980-05-17"},{"title":"The Phantom Menace","director":"George Lucas","releaseDate":"1999-05-19"}];
  }
}
