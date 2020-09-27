import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';
import { GenreViewComponent } from './components/genre-view/genre-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieViewComponent,
    GenreViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
