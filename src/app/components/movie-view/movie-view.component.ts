import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieModel} from '../../Models/MovieModel';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  movie: MovieModel;
  movieID: string;
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.movieID = this.route.snapshot.url[1].path;
    this.movieService.getFullMovieWithDescription(this.movieID).subscribe((items: MovieModel[]) => {
      this.movie = items[0];
      console.log(this.movie);
    });
  }

}
