import { Controller, Get, Response } from '@nestjs/common';
import { Response as expResponse } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private moviesService = new AppService();
  
  @Get('hello')
  getHello(@Response() res: expResponse): expResponse {
    return res.json('Hello World');
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
    const movies = await this.moviesService.getMovies();
    
    //Sort movies by title; Server side data manipulation
    const sortedMovies = this.moviesService.sortByTitle(movies);

    return res.json(movies);
  }
}