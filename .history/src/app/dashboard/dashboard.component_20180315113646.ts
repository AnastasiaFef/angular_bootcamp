import { Component, OnInit } from '@angular/core';

import { Video } from './app-types';

@Component({
  selector: 'abc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // selectedVideo: Video;
  constructor() { }

  ngOnInit() {
  }

  // displayVideo(video: Video) {
  //   this.selectedVideo = video;
  // }
}
