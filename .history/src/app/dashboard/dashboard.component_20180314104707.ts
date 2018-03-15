import { Component, OnInit } from '@angular/core';

import { VideoView } from './app-types';

@Component({
  selector: 'abc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedVideo: VideoView;
  constructor() { }

  ngOnInit() {
  }

  displayVideo(video: VideoView) {
    this.selectedVideo = video;
  }
}
