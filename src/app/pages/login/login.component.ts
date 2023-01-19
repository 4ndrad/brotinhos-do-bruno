import { User } from './../../../environments/user';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user);
  }

}
