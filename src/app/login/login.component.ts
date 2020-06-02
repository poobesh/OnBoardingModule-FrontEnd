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
    
    if(localStorage.getItem('user_email')){
         this.loggedIn = true;
        }
		else{
			this.loggedIn = false;
		}
		
	
  }
  
  signInWithGoogle() {
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) =>{
    this.user = user;
    this.loggedIn=(user != null);
    localStorage.setItem('user_email',user.email)
    
    });
  }
    signOut(): void {
      
      this.authService.signOut();
	    this.route.navigate(['']);
	    this.loggedIn = false;
  
    }
	
	isLoggedIn(): boolean {
		return this.loggedIn;
	}
    nextPage(){
      if(localStorage.getItem('user_email') != null){
        
        this.route.navigate(['/home']);
            }
            else
            {
            
              this.route.navigate(['']);
            }
      
    }

}
