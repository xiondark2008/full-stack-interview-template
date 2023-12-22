import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response as expResponse } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      let mockResponse: expResponse = {
        json: (data: any) => {
          return data;
        },
      } as expResponse;
      expect(appController.getHello(mockResponse)).toBe('Hello World!');
    });
  });

  describe('getMovies', () => {
    it('should return an array of movies', async () => {
      let mockResponse: expResponse = {
        json: (data: any) => {
          return data;
        },
      } as expResponse;
      expect(await appController.getMovies(mockResponse)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            director: expect.any(String),
            releaseDate: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('getMoviesByTitle', () => {
    it('should return an array of movies sorted by title', async () => {
      let mockResponse: expResponse = {
        json: (data: any) => {
          return data;
        },
      } as expResponse;
      expect(await appController.getMoviesByTitle(mockResponse)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            director: expect.any(String),
            releaseDate: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('getMoviesByDirector', () => {
    it('should return an array of movies sorted by director', async () => {
      let mockResponse: expResponse = {
        json: (data: any) => {
          return data;
        },
      } as expResponse;
      expect(await appController.getMoviesByDirector(mockResponse)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            director: expect.any(String),
            releaseDate: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('getMoviesByReleaseDate', () => {
    it('should return an array of movies sorted by release date', async () => {
      let mockResponse: expResponse = {
        json: (data: any) => {
          return data;
        },
      } as expResponse;
      expect(await appController.getMoviesByReleaseDate(mockResponse)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: expect.any(String),
            director: expect.any(String),
            releaseDate: expect.any(String),
          }),
        ]),
      );
    });
  });
});
