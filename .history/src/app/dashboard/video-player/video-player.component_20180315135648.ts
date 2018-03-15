import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../app-types';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { pluck, switchMap, share } from 'rxjs/operators';
import { VideoLoaderService } from ''

@Component({
  selector: 'abc-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video: Observable<Video>;

  constructor(route: ActivatedRoute) {
    this.video = route.queryParams
      .pipe(
        pluck<Params, string>('video'),
        switchMap(id => VideoLoaderService.['video']),
        share()
      );
  }
  ngOnInit() {
  }
}



//       pluck<Params, string>('employeeId'), // like .map(params => params['employeeId'])
//       switchMap(id => loader.getDetails(id)), //unwraps inner observable
//       share());
