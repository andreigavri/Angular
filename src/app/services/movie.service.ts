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

  getMovieList() {
    return this.movieObservable.asObservable();
  }

  createMovie(body: any) {
    this.httpClient.post("https://api.codebyte-software.com:2323/api/movie", body).subscribe((response: any) => {
      console.log(response)
      this.readMovie()
    });
  }

  updateMovie(movie: any) {

  }

  deleteMovie(movieId: string) {
    this.httpClient.delete("https://api.codebyte-software.com:2323/api/movie/" + movieId)
      .subscribe((response: any) => {
        console.log(response)
        this.readMovie();
      })
  }

  readMovie() {
    this.httpClient.get("https://api.codebyte-software.com:2323/api/movie").subscribe((response: any) => {
      console.log(response)
      this.movieObservable.next(response.data);
    });
  }
}
