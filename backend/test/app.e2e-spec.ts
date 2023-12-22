import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('"Hello World!"'); //Changed to match stringified json being returned
  });

  it('/movies (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect([
        {
          title: 'A New Hope',
          director: 'George Lucas',
          releaseDate: '1977-05-25',
        },
        {
          title: 'The Empire Strikes Back',
          director: 'Irvin Kershner',
          releaseDate: '1980-05-17',
        },
        {
          title: 'Return of the Jedi',
          director: 'Richard Marquand',
          releaseDate: '1983-05-25',
        },
        {
          title: 'The Phantom Menace',
          director: 'George Lucas',
          releaseDate: '1999-05-19',
        },
        {
          title: 'Attack of the Clones',
          director: 'George Lucas',
          releaseDate: '2002-05-16',
        },
        {
          title: 'Revenge of the Sith',
          director: 'George Lucas',
          releaseDate: '2005-05-19',
        },
      ]);
  });

  it('/movies/byTitle (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies/byTitle')
      .expect(200)
      .expect([
        {
          title: 'A New Hope',
          director: 'George Lucas',
          releaseDate: '1977-05-25',
        },
        {
          title: 'Attack of the Clones',
          director: 'George Lucas',
          releaseDate: '2002-05-16',
        },
        {
          title: 'Return of the Jedi',
          director: 'Richard Marquand',
          releaseDate: '1983-05-25',
        },
        {
          title: 'Revenge of the Sith',
          director: 'George Lucas',
          releaseDate: '2005-05-19',
        },
        {
          title: 'The Empire Strikes Back',
          director: 'Irvin Kershner',
          releaseDate: '1980-05-17',
        },
        {
          title: 'The Phantom Menace',
          director: 'George Lucas',
          releaseDate: '1999-05-19',
        },
      ]);
  });

  it('/movies/byDirector (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies/byDirector')
      .expect(200)
      .expect([
        {
          title: 'A New Hope',
          director: 'George Lucas',
          releaseDate: '1977-05-25',
        },
        {
          title: 'The Phantom Menace',
          director: 'George Lucas',
          releaseDate: '1999-05-19',
        },
        {
          title: 'Attack of the Clones',
          director: 'George Lucas',
          releaseDate: '2002-05-16',
        },
        {
          title: 'Revenge of the Sith',
          director: 'George Lucas',
          releaseDate: '2005-05-19',
        },
        {
          title: 'The Empire Strikes Back',
          director: 'Irvin Kershner',
          releaseDate: '1980-05-17',
        },
        {
          title: 'Return of the Jedi',
          director: 'Richard Marquand',
          releaseDate: '1983-05-25',
        },
      ]);
  });

  it('/movies/byReleaseDate (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies/byReleaseDate')
      .expect(200)
      .expect([
        {
          title: 'A New Hope',
          director: 'George Lucas',
          releaseDate: '1977-05-25',
        },
        {
          title: 'The Empire Strikes Back',
          director: 'Irvin Kershner',
          releaseDate: '1980-05-17',
        },
        {
          title: 'Return of the Jedi',
          director: 'Richard Marquand',
          releaseDate: '1983-05-25',
        },
        {
          title: 'The Phantom Menace',
          director: 'George Lucas',
          releaseDate: '1999-05-19',
        },
        {
          title: 'Attack of the Clones',
          director: 'George Lucas',
          releaseDate: '2002-05-16',
        },
        {
          title: 'Revenge of the Sith',
          director: 'George Lucas',
          releaseDate: '2005-05-19',
        },
      ]);
  });
});
