import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() movieData: any
  carouselItem: any[] =[]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["movieData"]) {
      console.log(this.carouselItem);
      
      this.movieData.results.forEach((element: any) => {
        this.carouselItem.push(element.backdrop_path)
      });
    }

  }

}
