import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('user_email') && localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
		  'Content-Type':'application/json',
          'Authorization' :'Bearer '+localStorage.getItem('token')
        }
      })
    }
    return next.handle(req);
  }
}
