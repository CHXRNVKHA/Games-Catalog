import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {
  isAuth: boolean = false;
  currentUser: User = {
    id: -1,
    userName: 'defname',
    email: 'defmail',
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    if (localStorage.getItem('currentUser') !== null) this.isAuth = true;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.isAuth = false;
  }

}
