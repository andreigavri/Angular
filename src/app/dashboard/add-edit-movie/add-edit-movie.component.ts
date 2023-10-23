import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent {
  title: FormControl<any> = new FormControl<any>("", [Validators.required])
  description: FormControl<any> = new FormControl<any>("", [Validators.required])
  director: FormControl<any> = new FormControl<any>("", [Validators.required])
  year: FormControl<any> = new FormControl<any>("", [Validators.required])

  getErrorMessage() {
    return "error found"
  }
  onSave(){
    console.log("Save");
  }
}
