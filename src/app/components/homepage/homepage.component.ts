import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {MovieShortModel} from '../../Models/MovieShortModel';
import {MovieService} from '../../services/movie.service';
import {Router} from '@angular/router';
import {ActorModel} from '../../Models/ActorModel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movieShortList: MovieShortModel[] = [];
  genreList = ['Action', 'Drama', 'Crime', 'Adventure', 'Romance', 'Comedy', 'Thriller', 'Fantasy', 'Horror'];
  genreKeys = {
    Action: 'Q188473',
    Drama: 'Q130232',
    Crime: 'Q959790',
    Adventure: 'Q319221',
    Romance: 'Q1054574',
    Comedy: 'Q157443',
    Thriller: 'Q2484376',
    Fantasy: 'Q157394',
    Horror: 'Q200092'
  };
  private actorShortList: ActorModel[] = [];
  constructor(private movieService: MovieService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  searchMovies(value: string) {
    this.movieService.getMoviesWithDescription(value).subscribe((items) => {
      this.movieShortList = items;
    });
  }

  redirectToMovieView(id: string) {
    this.router.navigate(['/', 'Movie', id]);
  }

  searchByActor(value: string) {
    this.movieService.getActorInfoByName(value).subscribe((items: ActorModel[]) => {
      this.actorShortList = items;
    });
  }

  redirectToActorView(item: any) {
    console.log(item);
  }

  searchByGenre(value: string) {
    this.router.navigate(['/', 'Genre', this.genreKeys[value]]);
  }
}
