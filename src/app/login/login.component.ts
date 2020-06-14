import { Component, OnInit } from '@angular/core';

import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:SocialUser;
  public loggedIn:boolean =false;
  

  constructor( private route : Router ,private authService: AuthService, private httpClient:HttpClient ) {
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
    return this.httpClient.post<any>('http://localhost:8080/authenticate',
    {
      "username":user.email,
      "password":"password"
    }
    ).subscribe(
          userData => {
            localStorage.setItem('user_email',user.email);
            let tokenStr= userData.token;
            localStorage.setItem('token', tokenStr);
            this.loggedIn=(user != null);
			console.log('INSIDE LOGIN : '+localStorage.getItem('token'));
          }
       ,() => {
		   this.authService.signOut();
		   this.loggedIn = false;
		   alert("You are not authorized for login ...");}
      );
    
   
    
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
