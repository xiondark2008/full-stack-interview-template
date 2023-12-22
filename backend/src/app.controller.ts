import { Controller, Get, Response } from '@nestjs/common';
import { Response as expResponse } from 'express';
import { AppService } from './app.service';
import { Movie } from './app.types';

@Controller()
export class AppController {
  private moviesService = new AppService();

  @Get('/') //Added to match test cases
  @Get('hello')
  getHello(@Response() res: expResponse): expResponse {
    return res.json('Hello World!'); //Added "!" to match test cases
  }

  /**
   * Get list of movies from provided source
   * @param res
   * @returns
   */
  @Get('movies')
  async getMovies(@Response() res: expResponse): Promise<expResponse> {
    //TODO: create typescript interface for data, see if I can pull types from the source repo.
    //Get movies from service
    const movies: Movie[] = await this.moviesService.getMovies();

    //Sort movies by title; Server side data manipulation
    const sortedMovies: Movie[] =
      movies && movies.length > 0
        ? this.moviesService.sortByTitle(movies)
        : movies;

    return res.json(movies);
  }
}
