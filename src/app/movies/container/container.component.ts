import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

export interface IVideoData {
  id: number,
  results: [{
    id: string,
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string
  }]
}


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  data: any
  videoKey: string =''

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.getMovieData().subscribe(data => {
      this.data = data
    })
  }

  handleVideoKey(key:string){
    this.videoKey = key
  }


}
