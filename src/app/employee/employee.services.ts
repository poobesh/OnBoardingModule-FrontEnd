import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee, httpOptions } from './employee';

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
	addEmployee (employee: Employee): Observable<Employee> {
	  return this.http.post<Employee>(this.url, employee)
		
     }
	 deleteEmployee (id: string) : Observable<Employee> {
		 return this.http.delete<Employee>(this.url.concat("/").concat(id));
   }
   updateEmployee (employee: any,id : string) : Observable<Employee> {
    return this.http.put<Employee>(this.url.concat("/").concat(id),employee);
  }
	private handleError(error: Response){
		return Observable.throw(error);
	}
}