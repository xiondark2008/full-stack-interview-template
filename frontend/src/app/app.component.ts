import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie } from './app.component.types';
import { ButtonComponent } from './components/button/button.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HttpClientModule, ButtonComponent, MoviesTableComponent],
  providers: [ApiService, HttpClient],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = '';
  movies: Movie[] = [];

  constructor(private apiService: ApiService) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.apiService.getHelloWorld().subscribe((data) => {
      this.message = data;
    });

    this.displayMovies();
  }

  /**
   * Display movies
   */
  displayMovies(): void {
    this.apiService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  /**
   * Display movies sorted by title
   */
  displayMoviesSortedByTitle(): void {
    this.apiService.getMoviesSortedByTitle().subscribe((movies) => {
      this.movies = movies;
    });
  }

  /**
   * Display movies sorted by director
   */
  displayMoviesSortedByDirector(): void {
    this.apiService.getMoviesSortedByDirector().subscribe((movies) => {
      this.movies = movies;
    });
  } 

  /**
   * Display movies sorted by release date
   */
  displayMoviesSortedByReleaseDate(): void {
    this.apiService.getMoviesSortedByReleaseDate().subscribe((movies) => {
      this.movies = movies;
    });
  } 
}
