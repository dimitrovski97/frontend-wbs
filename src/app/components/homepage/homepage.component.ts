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
      console.log(items);
      this.actorShortList = items;
    });
  }

  redirectToActorView(item: any) {
    console.log(item);
  }
}
