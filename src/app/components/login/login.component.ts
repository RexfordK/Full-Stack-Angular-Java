import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
auth;
  username: string;
  password: any;

  constructor(private authService: HardcodedAuthenticationService, private route: Router) {
    
   }

  ngOnInit() {
    
  }

  handleLogin() {
    console.log("login");
    console.log("this.auth",this.auth)
    this.authService.authenticate(this.username,this.password);
    if(this.authService.isUserLoggedIn) {
      this.route.navigate([`/welcome/${this.username}`])
    }
  }

}
