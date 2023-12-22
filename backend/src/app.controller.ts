import { Controller, Get, Response } from '@nestjs/common';
import { Response as expResponse } from 'express';
import { AppService } from './app.service';
import { Movie } from './app.types';

@Controller()
export class AppController {
  private moviesService = new AppService();

  @Get(['/', 'hello']) //Changed to match test cases
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
    //Get movies from service
    const movies: Movie[] = await this.moviesService.getMovies();

    return res.json(movies);
  }

  /**
   * Get list of movies sorted by title
   * @param res
   * @returns
   */
  @Get('movies/byTitle')
  async getMoviesByTitle(@Response() res: expResponse): Promise<expResponse> {
    //Get movies from service
    const movies: Movie[] = await this.moviesService.getMovies();

    //Sort movies by title; Server side data manipulation
    const sortedMovies: Movie[] =
      movies.length > 0 ? this.moviesService.sortByTitle(movies) : movies;

    return res.json(sortedMovies);
  }

  /**
   * Get list of movies sorted by director
   * @param res
   * @returns
   */
  @Get('movies/byDirector')
  async getMoviesByDirector(
    @Response() res: expResponse,
  ): Promise<expResponse> {
    //Get movies from service
    const movies: Movie[] = await this.moviesService.getMovies();

    //Sort movies by director; Server side data manipulation
    const sortedMovies: Movie[] =
      movies.length > 0 ? this.moviesService.sortByDirector(movies) : movies;

    return res.json(sortedMovies);
  }

  /**
   * Get list of movies sorted by release date
   * @param res
   * @returns
   */
  @Get('movies/byReleaseDate')
  async getMoviesByReleaseDate(
    @Response() res: expResponse,
  ): Promise<expResponse> {
    //Get movies from service
    const movies: Movie[] = await this.moviesService.getMovies();

    //Sort movies by release date; Server side data manipulation
    const sortedMovies: Movie[] =
      movies.length > 0 ? this.moviesService.sortByReleaseDate(movies) : movies;

    return res.json(sortedMovies);
  }
}
