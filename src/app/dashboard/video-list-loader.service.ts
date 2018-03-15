import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Video } from './app-types';

const API_URL = 'https://api.angularbootcamp.com';


@Injectable() //this @notation turns class into service
export class VideoLoaderService {

  constructor(private http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(API_URL + '/videos');
  }

  getVideo(id): Observable<Video> {
    return this.http.get<Video>(API_URL + '/videos/' + id);
  }
}





