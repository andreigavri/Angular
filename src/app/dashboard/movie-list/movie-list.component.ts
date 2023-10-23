import {Component} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movieList: Array<any> = [];

  constructor() {
    let movie1 = {
      title: "The Pianist",
      description: "Best rated movie",
      year: "2009",
      director: "Roman Polanski"
    };
    this.movieList.push(movie1);

    let movie2 = {
      title: "The GhostRider",
      description: "Splendid movie",
      year: "2005",
      director: "Mark Steven Johnson"
    };
    this.movieList.push(movie2);

  }
}
