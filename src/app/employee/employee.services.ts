import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee, httpOptions } from './employee';
import { IDemand } from './models/IDemand';

@Injectable()
export class EmployeeServices {
  constructor(private http: HttpClient) { }

   employeeUrl = "http://localhost:3000/posts";
   demandUrl = "http://localhost:3000/comments";

    getEmployees(): Observable<Employee[]>{
		console.log("Inside getEmployees in service ");
        return this.http.get<Employee[]>(this.employeeUrl)
							.pipe(
								  catchError(this.handleError)
								);
    }
    getEmployee(id: string): Observable<Employee>{
      console.log("Inside getEmployees in service ");
          return this.http.get<Employee>(this.employeeUrl.concat("/").concat(id))
							.pipe(
								  catchError(this.handleError)
								);
      }
	addEmployee (employee: Employee): Observable<Employee> {
	  return this.http.post<Employee>(this.employeeUrl, employee)
						.pipe(
								  catchError(this.handleError)
								);
		
     }
	 deleteEmployee (id: string) : Observable<Employee> {
		 return this.http.delete<Employee>(this.employeeUrl.concat("/").concat(id))
							.pipe(
								  catchError(this.handleError)
								);
   }
   updateEmployee (employee: any,id : string) : Observable<Employee> {
    return this.http.put<Employee>(this.employeeUrl.concat("/").concat(id),employee)
						.pipe(
								  catchError(this.handleError)
								);
  }
  
	  getDemands(): Observable<IDemand[]>{
			console.log("Inside getDemand in service ");
			return this.http.get<IDemand[]>(this.demandUrl)
								.pipe(
								  catchError(this.handleError)
								);
		}
  
	private handleError(error: HttpErrorResponse){
		return throwError("Something went wrong ...");
	}
}