import { Component, OnInit } from '@angular/core';

import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:SocialUser;
  private loggedIn:boolean ;
  public disable:boolean = true;

  constructor( private route : Router ,private authService: AuthService ) { }

  ngOnInit(): void {
    console.log("Logged In User "+ localStorage.getItem('user_email'));
    if(localStorage.getItem('user_email') != null){
         this.disable = false;
         this.loggedIn = true;
        }
  }
  signInWithGoogle() {
    console.log("Inside Sign in with google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) =>{
    this.user = user;
    this.loggedIn=(user != null);
    localStorage.setItem('user_email',user.email)
    if(user != null){
       this.disable = false;
       }
    });
  }
    signOut(): void {
      localStorage.setItem('user_email',null);
      this.authService.signOut();
  
    }
    nextPage(){
      if(this.loggedIn){
        console.log("IF "+ localStorage.getItem('user_email'));
        this.route.navigate(['/home']);
            }
            else
            {
            console.log("ELsE"+ localStorage.getItem('user_email'));
              this.route.navigate(['']);
            }
      
    }

}
