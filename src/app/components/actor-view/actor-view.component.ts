import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {ActorModel} from '../../Models/ActorModel';

@Component({
  selector: 'app-actor-view',
  templateUrl: './actor-view.component.html',
  styleUrls: ['./actor-view.component.scss']
})
export class ActorViewComponent implements OnInit {
  actorID: string;
  actor: ActorModel;
  noInfo: boolean;
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.actorID = this.route.snapshot.url[1].path;
    console.log(this.actorID);
    this.movieService.getActorInfoByID(this.actorID).subscribe((items: ActorModel[]) => {
      this.actor = items[0];
      this.noInfo = items.length === 0;
      console.log(items);
    });
  }

}
