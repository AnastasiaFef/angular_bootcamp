import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// import { videoList } from './list-data';
import { VideoListType, Video} from '../app-types';
import { VideoLoaderService} from '../video-list-loader.service';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'abc-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList: Observable<Video[]>;
  selectedVideoId: Observable<string>;

  constructor(dashboardService: VideoLoaderService, route: ActivatedRoute, router: Router) { 
    this.selectedVideoId = route.queryParams
    .pipe(
      tap(incomingVideoList => this.showVideo.emit(incomingVideoList[0]))
    )
        // .subscribe(videos => {
    //   this.videoList = videos;
      // this.showVideo.emit(this.videoList[0])
    // })
   }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
    this.showVideo.emit(video);
  }
}
