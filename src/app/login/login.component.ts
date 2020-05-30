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
  public loggedIn:boolean =false;
  

  constructor( private route : Router ,private authService: AuthService ) {
    	  }

  ngOnInit(): void {
    console.log("Logged In User "+ localStorage.getItem('user_email'));
	console.log("LoggedIn -1  "+ this.loggedIn );
    if(localStorage.getItem('user_email')){
         this.loggedIn = true;
        }
		else{
			this.loggedIn = false;
		}
		console.log("LoggedIn -2  "+ this.loggedIn );
	
  }
  
  signInWithGoogle() {
    console.log("Inside Sign in with google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) =>{
    this.user = user;
    this.loggedIn=(user != null);
    localStorage.setItem('user_email',user.email)
    
    });
  }
    signOut(): void {
      localStorage.removeItem('user_email');
      this.authService.signOut();
	    this.route.navigate(['']);
	    this.loggedIn = false;
  
    }
	
	isLoggedIn(): boolean {
		return this.loggedIn;
	}
    nextPage(){
      if(localStorage.getItem('user_email') != null){
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
