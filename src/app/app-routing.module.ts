import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieViewComponent} from './components/movie-view/movie-view.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {GenreViewComponent} from './components/genre-view/genre-view.component';

const routes: Routes = [{path: '', component: HomepageComponent}, {path: 'Movie/:movieID', component: MovieViewComponent},
  {path: 'Genre/:genreName', component: GenreViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
