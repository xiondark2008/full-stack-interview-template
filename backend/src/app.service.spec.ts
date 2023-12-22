import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });

  describe('getMovies', () => {
    it('should return an array of movies', async () => {
      expect(await appService.getMovies()).toEqual(
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

  describe('sortByTitle (Less than)', () => {
    it('should return an array of movies sorted by title in accending order', async () => {
      expect(
        appService.sortByTitle([
          {
            title: 'A',
            director: '',
            releaseDate: '1',
          },
          {
            title: 'B',
            director: '',
            releaseDate: '2',
          },
        ]),
      ).toEqual([
        {
          title: 'A',
          director: '',
          releaseDate: '1',
        },
        {
          title: 'B',
          director: '',
          releaseDate: '2',
        },
      ]);
    });
  });

  describe('sortByTitle (Equal to)', () => {
    it('should return an array of movies sorted by title in accending order', async () => {
      expect(
        appService.sortByTitle([
          {
            title: 'A',
            director: '',
            releaseDate: '2',
          },
          {
            title: 'A',
            director: '',
            releaseDate: '1',
          },
        ]),
      ).toEqual([
        {
          title: 'A',
          director: '',
          releaseDate: '2',
        },
        {
          title: 'A',
          director: '',
          releaseDate: '1',
        },
      ]);
    });
  });

  describe('sortByTitle (Greater than)', () => {
    it('should return an array of movies sorted by title in accending order', async () => {
      expect(
        appService.sortByTitle([
          {
            title: 'B',
            director: '',
            releaseDate: '2',
          },
          {
            title: 'A',
            director: '',
            releaseDate: '1',
          },
        ]),
      ).toEqual([
        {
          title: 'A',
          director: '',
          releaseDate: '1',
        },
        {
          title: 'B',
          director: '',
          releaseDate: '2',
        },
      ]);
    });
  });

  describe('sortByDirector (Less than)', () => {
    it('should return an array of movies sorted by director in accending order', async () => {
      expect(
        appService.sortByDirector([
          {
            title: '',
            director: 'A',
            releaseDate: '1',
          },
          {
            title: '',
            director: 'B',
            releaseDate: '2',
          },
        ]),
      ).toEqual([
        {
          title: '',
          director: 'A',
          releaseDate: '1',
        },
        {
          title: '',
          director: 'B',
          releaseDate: '2',
        },
      ]);
    });
  });

  describe('sortByDirector (Equal to)', () => {
    it('should return an array of movies sorted by director in accending order', async () => {
      expect(
        appService.sortByDirector([
          {
            title: '',
            director: 'A',
            releaseDate: '2',
          },
          {
            title: '',
            director: 'A',
            releaseDate: '1',
          },
        ]),
      ).toEqual([
        {
          title: '',
          director: 'A',
          releaseDate: '2',
        },
        {
          title: '',
          director: 'A',
          releaseDate: '1',
        },
      ]);
    });
  });

  describe('sortByDirector (Greater than)', () => {
    it('should return an array of movies sorted by director in accending order', async () => {
      expect(
        appService.sortByDirector([
          {
            title: '',
            director: 'B',
            releaseDate: '2',
          },
          {
            title: '',
            director: 'A',
            releaseDate: '1',
          },
        ]),
      ).toEqual([
        {
          title: '',
          director: 'A',
          releaseDate: '1',
        },
        {
          title: '',
          director: 'B',
          releaseDate: '2',
        },
      ]);
    });
  });

  describe('sortByReleaseDate (Less than)', () => {
    it('should return an array of movies sorted by release date in accending order', async () => {
      expect(
        appService.sortByReleaseDate([
          {
            title: 'A',
            director: '',
            releaseDate: '1',
          },
          {
            title: 'B',
            director: '',
            releaseDate: '2',
          },
        ]),
      ).toEqual([
        {
          title: 'A',
          director: '',
          releaseDate: '1',
        },
        {
          title: 'B',
          director: '',
          releaseDate: '2',
        },
      ]);
    });
  });

  describe('sortByReleaseDate (Equal to)', () => {
    it('should return an array of movies sorted by release date in accending order', async () => {
      expect(
        appService.sortByReleaseDate([
          {
            title: 'B',
            director: '',
            releaseDate: '1',
          },
          {
            title: 'A',
            director: '',
            releaseDate: '1',
          },
        ]),
      ).toEqual([
        {
          title: 'B',
          director: '',
          releaseDate: '1',
        },
        {
          title: 'A',
          director: '',
          releaseDate: '1',
        },
      ]);
    });
  });

  describe('sortByReleaseDate (Greater than)', () => {
    it('should return an array of movies sorted by release date in accending order', async () => {
      expect(
        appService.sortByReleaseDate([
          {
            title: 'B',
            director: '',
            releaseDate: '2',
          },
          {
            title: 'A',
            director: '',
            releaseDate: '1',
          },
        ]),
      ).toEqual([
        {
          title: 'A',
          director: '',
          releaseDate: '1',
        },
        {
          title: 'B',
          director: '',
          releaseDate: '2',
        },
      ]);
    });
  });
});
