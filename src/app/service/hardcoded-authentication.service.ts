import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class User{
  constructor(public username: string){}
}
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="fish" && password === 'dummy') {
      let user = new User(username);
      sessionStorage.setItem('authenticaterUser', JSON.stringify(user));
      console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
