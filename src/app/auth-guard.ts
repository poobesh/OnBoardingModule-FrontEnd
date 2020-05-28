import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('user_email')!= null){
      console.log("Get "+ localStorage.getItem('user_email'));
        return true;
          }
          else
          {
            this.routes.navigate(['']);
            console.log("Get "+ localStorage.getItem('user_email'));
            return false;
          }
    
  }
}