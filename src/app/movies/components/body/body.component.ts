import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MovieServiceService } from '../../movie-service.service';
import { IVideoData } from '../../container/container.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnChanges, OnInit {
  @Input() movieData: any
  @Output() key: EventEmitter<string> = new EventEmitter()
  src!: string
  title!: string
  pic: any

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.movieData);
    
    this.src = `https://image.tmdb.org/t/p/w500/${this.movieData.poster_path}`
    this.title = this.movieData.original_title
  }

  showVideo(id:number) {
    this.movieService.getVido(id).subscribe((data: IVideoData) => {
      this.key.emit(data.results[0].key)
    })
  }


}
