import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ITrendData } from './ITrendData';


@Injectable()
export class TrendsServices {
  constructor(private http: HttpClient) { }

   
   url = "http://localhost:8080/trends";

    getTrendDatas(name: string): Observable<ITrendData>{
      console.log(this.url.concat("/").concat(name));
          return this.http.get<ITrendData>(this.url.concat("/").concat(name))
							.pipe(
								  catchError(this.handleError)
								);
      }
	  getCompanies(): Observable<string[]>{
		  
		  return this.http.get<string[]>(this.url)
							.pipe(
								catchError(this.handleError)
								);
	  }
	
	private handleError(error: HttpErrorResponse) {
		
	  if (error.error instanceof ErrorEvent) {
		console.error('An error occurred:', error.error.message);
	  } else {
		  if(error.status == 200)
			  {
				  console.log("Operation Success");
			  }
			  else{
				  
				  console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
				  
			  }
	  }
	  return throwError("");
	};
}