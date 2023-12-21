import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

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
  async getMovies() {
    const url:string = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
    const config:object = {
      params: {
        "query": "query Query {allFilms {films {title,director,releaseDate}}}",
      }
    }
    
    try {
      //TODO: create typescript interface for data, see if I can pull types from the source repo.
      const { data } = await firstValueFrom(this.httpService.get(url, config));
      
      return data.data.allFilms.films;
    } catch (error) {
      console.log(error)
      //TODO: handle error
    }
  }

  //TODO: create typescript interface
  //TODO: create unit test
  /**
   * Sort movies by title
   * @param movies 
   * @returns array of movies sorted by title
   */
  sortByTitle(movies) {
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
