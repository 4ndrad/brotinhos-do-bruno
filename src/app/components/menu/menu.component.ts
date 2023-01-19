import { User } from './../../../environments/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  menu:boolean = false;

  private user: User = new User();

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.menu.subscribe(
      showMenu => this.menu = showMenu
    );
  }

  logout(){
    this.authService.logout(this.user)
  }

}
