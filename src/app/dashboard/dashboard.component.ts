import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedMovie: any = null;

  constructor() {
  }

  receiveMovieFromMovieList(movie: any) {
    console.log("In the dashboard component we received :");
    console.log(movie);
    this.selectedMovie = movie;
  }
}

