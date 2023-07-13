import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVideoData } from './container/container.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  API_KEY = '01a4ee01fbcfea16d6c231225b53fc4d'
  API_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}`

  constructor(private _http: HttpClient) { }

  getMovieData() {
    this._http.get(`https://api.themoviedb.org/3/movie/447365/videos?api_key=${this.API_KEY}`).subscribe(data => {
      console.log(data);

    })
    return this._http.get(this.API_MOVIES)
  }

  getVido(id: number): Observable<IVideoData> {
    return this._http.get<IVideoData>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}`)
  }
}
