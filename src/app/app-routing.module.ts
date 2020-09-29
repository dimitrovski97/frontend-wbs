import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieViewComponent} from './components/movie-view/movie-view.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {GenreViewComponent} from './components/genre-view/genre-view.component';
import {ActorViewComponent} from './components/actor-view/actor-view.component';

const routes: Routes = [{path: '', component: HomepageComponent}, {path: 'Movie/:movieID', component: MovieViewComponent},
  {path: 'Genre/:genreName', component: GenreViewComponent}, {path: 'Actor/:actorID', component: ActorViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
