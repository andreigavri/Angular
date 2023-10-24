import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Array<any> = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((movieList: Array<any>) => {
      this.movieList = movieList;
    })
  }

  onDelete(movie: any) {
    console.log(movie);
    this.movieService.deleteMovie(movie.id);
  }

  onEdit(movie: any) {
    console.log(movie);
  }
}
