import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; //300 added for http call to work 


import { DashboardComponent } from './dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoLoaderService } from './video-list-loader.service';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule //300 added for http call to work
  ],
  providers: [VideoLoaderService], //make loader service available to module
  declarations: [DashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoCardComponent]
})
export class DashboardModule { }
