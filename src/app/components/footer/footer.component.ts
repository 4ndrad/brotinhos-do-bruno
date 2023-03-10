import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';
import { AuthService } from 'src/app/pages/login/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  footer:boolean = false;

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.footer.subscribe(
      showFooter => this.footer = showFooter
    )
  }

  logout(){
    this.authService.logout(this.user)
  }


}
