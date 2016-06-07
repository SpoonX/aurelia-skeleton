import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {AuthService} from "aurelia-authentication";

@inject(Router, AuthService)
export class App {
  constructor(router, authService) {
    this.router        = router;
    let payload        = authService.getTokenPayload();
    this.username      = payload ? payload.username : null;
    this.authenticated = authService.isAuthenticated();
  }
}
