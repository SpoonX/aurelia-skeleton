import {inject} from "aurelia-dependency-injection";
import {AuthService} from "aurelia-authentication";
import {Notification} from "aurelia-notification";

@inject(AuthService, Notification)
export class Login {
  username = '';

  password = '';

  constructor(authService, notification) {
    this.notification = notification;
    this.authService  = authService;
  }

  login() {
    return this.authService.login({
      username: this.username,
      password: this.password
    }).catch(error => {
      this.notification.error('Login failed!');

      console.error(error);
    });
  }
}
