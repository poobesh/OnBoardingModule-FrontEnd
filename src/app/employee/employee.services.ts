import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable()
export class EmployeeServices {
  constructor(private http: HttpClient) { }

   url = "http://localhost:3000/posts";

    getEmployees(): Observable<Employee[]>{
		console.log("Inside getEmployees in service ");
        return this.http.get<Employee[]>(this.url);
    }
    getEmployee(id: string): Observable<Employee>{
      console.log("Inside getEmployees in service ");
          return this.http.get<Employee>(this.url.concat("/").concat(id));
      }
	
	private handleError(error: Response){
		return Observable.throw(error);
	}
}