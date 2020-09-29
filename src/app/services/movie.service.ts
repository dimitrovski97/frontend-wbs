import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieShortModel} from '../Models/MovieShortModel';
import {capitalize, MovieModel} from '../Models/MovieModel';
import {ActorModel} from '../Models/ActorModel';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost:8080/getTitleAndDesc/';  // URL to web api
  private movieFullUrl = 'http://localhost:8080/movie/';
  private actorUrl = 'http://localhost:8080/actor/';
  private genreUrl = 'http://localhost:8080/by-genre/';
  private actorByMovieUrl = 'http://localhost:8080/cast/';
  private actorInfoByID = 'http://localhost:8080/actorByID/';

  constructor(private http: HttpClient) { }
  getMoviesWithDescription(name: string): Observable<MovieShortModel[]> {
    return this.http.get<MovieShortModel[]>(this.movieUrl.concat(capitalize(name)));
  }
  getFullMovieWithDescription(id: string): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.movieFullUrl.concat(id));
  }

  getActorInfoByName(value: string) {
    return this.http.get<ActorModel[]>(this.actorUrl.concat(value));
  }

  getMoviesByGenre(genreID: string) {
    return this.http.get<MovieModel[]>(this.genreUrl.concat(genreID));
  }

  getActorsByMovieId(movieID: string) {
    return this.http.get<ActorModel[]>(this.actorByMovieUrl.concat(movieID));
  }
  getActorInfoByID(actorID: string) {
    return this.http.get<ActorModel[]>(this.actorInfoByID.concat(actorID));
  }
}
