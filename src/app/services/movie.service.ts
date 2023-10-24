import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieObservable = new BehaviorSubject<Array<any>>([]);
  constructor(private httpClient: HttpClient) {
    this.readMovie();
  }

  getMovieList(){
    return this.movieObservable.asObservable();
  }

  createMovie(movie: any) {

  }

  updateMovie(movie: any) {

  }

  deleteMovie(movieId: string) {

  }

  readMovie() {
    this.httpClient.get("https://api.codebyte-software.com:2323/api/movie").subscribe((response: any) => {
      console.log(response)
      this.movieObservable.next(response.data);
    });
  }
}
