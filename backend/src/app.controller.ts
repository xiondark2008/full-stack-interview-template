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
    const movies = await this.moviesService.getMovies();
    const sortedMovies = this.moviesService.sortByTitle(movies);

    return res.json(movies);
  }
}