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

  //TODO: create unit test
  /**
   * Get list of movies from provided source
   * @returns array of movies
   */
  async getMovies(): Promise<Movie[] | null> {
    const url: string =
      'https://swapi-graphql.netlify.app/.netlify/functions/index';
    const config: object = {
      params: {
        query: `query Query {
          allFilms {
            films {
              title,
              director,
              releaseDate
            }
          }
        }`,
      },
    };

    try {
      const {
        data: { allFilms: films },
      } = await firstValueFrom(this.httpService.get(url, config));

      return films;
    } catch (error) {
      console.log(error);

      return null;
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
}
