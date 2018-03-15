import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../app-types';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'abc-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  videoId: Observable<string>;
  constructor(route: ActivatedRoute) {
    this.videoId = route.queryParams
      .pipe(
        map(params => params['video'])
      );
  }
  ngOnInit() {
  }

}
