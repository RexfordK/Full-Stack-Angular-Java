import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === "rexford" && password === "dummy") {
      sessionStorage.setItem("authenticateUser", username)
      return true;
    } else {
      return false;
    }
  }
}
