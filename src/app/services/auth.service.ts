import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public login(email: string, password: string) {
    let body = {
      email: email,
      password: password,
    }
    this.httpClient.post("https://api.codebyte-software.com:2323/api/auth/login",body)

  }
}

