import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
auth;
  username: string;
  password: any;

  constructor(private authService: HardcodedAuthenticationService) {
    
   }

  ngOnInit() {
    this.auth = this.authService.authenticate(this.username,this.password);
  }

  handleLogin() {
    console.log("login");
    console.log("this.auth",this.auth)
  }

}
