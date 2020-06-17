import { Injectable } from '@angular/core';
import {HttpResponse,HttpClient} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private url = 'http://localhost:8080/logs/';
  constructor(private http: HttpClient) { }

  downloadFile(d:Date){
	    console.log("Url Is : "+this.url.concat(d.toLocaleString()));
		return this.http.get(this.url.concat(d.toLocaleString()), {responseType: 'blob' }).toPromise();
  }

}
