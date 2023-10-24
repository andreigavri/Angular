import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  reTypePassword = new FormControl('', [Validators.required]);
  hide = true;
  authType = "login"

  constructor(private authService: AuthService) {

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onChangeAuthType(): void {
    if (this.authType == 'login') {
      this.authType = 'register';
    } else {
      this.authType = 'login';
    }
  }

  onLogin() {
    let emailTxt = this.email.getRawValue()!;
    let passwordTxt = this.password.getRawValue()!;
    console.log(emailTxt, passwordTxt);
    this.authService.login(emailTxt, passwordTxt).subscribe((response: any) => {
      console.log(response);
      alert("Success")
    }, (error) => {
      alert("There is a new error");
      console.log(error)
    });
  }

  onRegister() {
    let emailTxt = this.email.getRawValue()!;
    let usernameTxt = this.username.getRawValue()!;
    let passwordTxt = this.password.getRawValue()!;
    let reTypePasswordTxt = this.reTypePassword.getRawValue()!;
    this.authService.register(emailTxt, usernameTxt, passwordTxt, reTypePasswordTxt).subscribe((response: any) => {
      console.log(response);
      alert("Successfully Registered")
    }, (error) => {
      alert("There is a new error");
      console.log((error))
    });
    console.log(emailTxt, usernameTxt, passwordTxt, reTypePasswordTxt);
  }
}
