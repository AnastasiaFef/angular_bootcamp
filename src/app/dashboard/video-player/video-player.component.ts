import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../app-types';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { pluck, switchMap, share, tap } from 'rxjs/operators';
import { VideoLoaderService } from '../video-list-loader.service'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


const EMBED_URL = 'http://www.youtube.com/embed/';

@Component({
  selector: 'abc-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video: Observable<Video>;
  currentVideoUrl: SafeUrl;

  constructor(route: ActivatedRoute, loader: VideoLoaderService, domSanitizer: DomSanitizer) { //loader can be any name
    this.video = route.queryParams
      .pipe(
        pluck<Params, string>('video'),
        tap(videoId => this.currentVideoUrl = domSanitizer.bypassSecurityTrustResourceUrl(EMBED_URL + videoId)),
        switchMap(id => loader.getVideo(id)),
        share()
      );
  }
  ngOnInit() {
  }
}



//       pluck<Params, string>('employeeId'), // like .map(params => params['employeeId'])
//       switchMap(id => loader.getDetails(id)), //unwraps inner observable
//       share());
