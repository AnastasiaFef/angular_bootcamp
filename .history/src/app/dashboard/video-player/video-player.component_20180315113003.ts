import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../app-types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'abc-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor() {
    videoId: Observable<string>
   }

  ngOnInit() {
  }

}
