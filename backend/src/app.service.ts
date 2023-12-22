import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Movie } from './app.types';

@Injectable()
export class AppService {
  private httpService = new HttpService();

  //Starting code
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Get list of movies from provided source
   * @returns array of movies
   */
  async getMovies(): Promise<Movie[]> {
    const url: string =
      'https://swapi-graphql.netlify.app/.netlify/functions/index';
    const config: object = {
      params: {
        query: 'query Query {allFilms {films {title, director, releaseDate}}}',
      },
    };

    try {
      //destructure response to get movies
      const {
        data: {
          data: {
            allFilms: { films: movies },
          },
        },
      } = await firstValueFrom(this.httpService.get(url, config));

      return movies;
    } catch (error) {
      //Log error and return empty array to gracefully handle error
      console.error(error);
      return [];
    }
  }

  //TODO: create unit test
  /**
   * Sort movies by title
   * @param movies
   * @returns array of movies sorted by title
   */
  sortByTitle(movies: Movie[]): Movie[] {
    return movies.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  /**
   * Sort movies by director
   * @param movies 
   * @returns array of movies sorted by director
   */
  sortByDirector(movies: Movie[]): Movie[] {
    return movies.sort((a, b) => {
      if (a.director > b.director) {
        return 1;
      } else if (b.director > a.director) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  /**
   * Sort movies by release date
   * @param movies 
   * @returns array of movies sorted by release date
   */
  sortByReleaseDate(movies: Movie[]): Movie[] {
    return movies.sort((a, b) => {
      if (a.releaseDate > b.releaseDate) {
        return 1;
      } else if (b.releaseDate > a.releaseDate) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
