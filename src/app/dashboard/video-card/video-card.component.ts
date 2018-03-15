import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abc-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input() video;
  constructor() { }

  ngOnInit() {
  }

}
