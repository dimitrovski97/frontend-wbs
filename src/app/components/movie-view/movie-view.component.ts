import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieModel} from '../../Models/MovieModel';
import {MovieService} from '../../services/movie.service';
import {ActorModel} from '../../Models/ActorModel';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  movie: MovieModel;
  movieID: string;
  actorList: ActorModel [] = [];
  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.movieID = this.route.snapshot.url[1].path;
    this.movieService.getFullMovieWithDescription(this.movieID).subscribe((items: MovieModel[]) => {
      this.movie = items[0];
      console.log(this.movie);
    });
    this.movieService.getActorsByMovieId(this.movieID).subscribe((items: ActorModel[]) => {
      this.actorList = items;
      console.log(items);
    });
  }
  redirectToActorView(id: any) {
    this.router.navigate(['/', 'Actor', id]);
  }

}
