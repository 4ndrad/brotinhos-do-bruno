import { User } from '../../data/user';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false

  menu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User){
    if(user.name === 'user' && user.password === '123'){
      this.userAuthenticated = true;
      this.menu.emit(true);
      this.router.navigate(['/']);
    }else{
      this.userAuthenticated = false;
      this.menu.emit(false);
      alert("Your password or email is wrong")
    }
  }

  logout(user: User){
    this.userAuthenticated = false
    this.menu.emit(false);
  }

  userIsAuthenticated(){
    return this.userAuthenticated;
  }
}
