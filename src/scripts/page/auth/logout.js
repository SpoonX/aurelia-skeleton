import {AuthService} from 'aurelia-authentication';
import {inject} from 'aurelia-dependency-injection';

@inject(AuthService)
export class Logout {
  constructor (authService) {
    this.authService = authService;
  }

  activate () {
    this.authService.logout();
  }
}
