import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private routes : Router) { }

  ngOnInit(): void {
  }
  signOut(): void {
    localStorage.setItem('user_email',null);
    this.authService.signOut();
    this.routes.navigate(['']);

  }

}
