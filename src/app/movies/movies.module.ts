import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YouTubePlayerModule} from '@angular/youtube-player';


import { MovieServiceService } from './movie-service.service'

import { ContainerComponent } from './container/container.component';
import { BodyComponent } from './components/body/body.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ContainerComponent,
    BodyComponent,
    VideoPlayerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    ContainerComponent
  ],
  providers: [
    MovieServiceService
  ]
})
export class MoviesModule { }
