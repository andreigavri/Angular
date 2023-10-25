import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent {
  id: string = "";
  title: FormControl<any> = new FormControl<any>("", [Validators.required])
  description: FormControl<any> = new FormControl<any>("", [Validators.required])
  director: FormControl<any> = new FormControl<any>("", [Validators.required])
  year: FormControl<any> = new FormControl<any>("", [Validators.required])

  constructor(private movieService: MovieService) {

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
