import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieViewComponent} from './components/movie-view/movie-view.component';
import {HomepageComponent} from './components/homepage/homepage.component';

const routes: Routes = [{path: '', component: HomepageComponent}, {path: 'Movie/:movieID', component: MovieViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
