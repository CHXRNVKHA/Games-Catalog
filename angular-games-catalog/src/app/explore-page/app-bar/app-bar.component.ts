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
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
