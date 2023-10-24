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
    let emailTxt = this.email.getRawValue();
    let passwordTxt = this.password.getRawValue();
    console.log(emailTxt, passwordTxt);
  }

  onRegister() {
  }
}

