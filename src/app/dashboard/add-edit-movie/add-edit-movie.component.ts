import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnChanges {
  @Input() movie: any = null;


  id: string = "";
  title: FormControl<any> = new FormControl<any>("", [Validators.required])
  description: FormControl<any> = new FormControl<any>("", [Validators.required])
  director: FormControl<any> = new FormControl<any>("", [Validators.required])
  year: FormControl<any> = new FormControl<any>("", [Validators.required])

  constructor(private movieService: MovieService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.movie != null) {
      console.log("We are in the add-edit-movie component and we have received :");
      console.log(this.movie);

      this.id = this.movie.id;
      this.title = new FormControl<any>(this.movie.title, [Validators.required]);
      this.description = new FormControl<any>(this.movie.description, [Validators.required]);
      this.director = new FormControl<any>(this.movie.director, [Validators.required]);
      this.year = new FormControl<any>(this.movie.year, [Validators.required]);
    }
  }

  getErrorMessage() {
    return "error found"
  }

  onSave() {
    let titleTxt = this.title.getRawValue()!;
    let descriptionTxt = this.description.getRawValue()!;
    let yearTxt = this.year.getRawValue()!;
    let directorTxt = this.director.getRawValue()!;

    let body = {
      id: this.id,
      title: titleTxt,
      description: descriptionTxt,
      year: yearTxt,
      director: directorTxt
    };

    if (this.id == "") {
      console.log("Create Movie")
      this.movieService.createMovie(body);
    } else {
      console.log("Update Movie")
      this.movieService.updateMovie(body);
    }
  }
}
