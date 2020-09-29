import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {MovieModel} from '../../Models/MovieModel';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss']
})
export class GenreViewComponent implements OnInit {
  private genreID: string;
  private genreMovies: MovieModel[] = [];

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private router: Router)  { }

  ngOnInit() {
    this.genreID = this.route.snapshot.url[1].path;
    this.movieService.getMoviesByGenre(this.genreID).subscribe((items: MovieModel[]) => {
      this.genreMovies = items;
      console.log(this.genreMovies, items);
    });
  }

  redirectToMovieView(id: string) {
    this.router.navigate(['/', 'Movie', id]);
  }
}
