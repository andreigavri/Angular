import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = null;

  constructor() {
  }

  public setUser(user: any) {
    this.user = user;
  }

  public getUser() {
    return this.user;
  }
}
