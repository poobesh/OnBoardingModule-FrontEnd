import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { EmployeeServices } from '../services/employee.services';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public deleteId : any;
  public employee : Employee[] ;
  searchText:string;
  public loading:boolean= true;
  public error:boolean = false;
  constructor(private authService: AuthService, private routes : Router , private service : EmployeeServices ) { }

  ngOnInit(): void {
     this.showEmployee();
      console.log("Data : "+ this.employee);
	  for(var x in this.employee)
	  {
		  console.log(this.employee[x]["id"]);
	  }
    
  }

  signOut(): void {
    localStorage.removeItem('user_email');
    this.authService.signOut();
	console.log(localStorage.getItem('user_email'));
    this.routes.navigate(['logout']);

  }
  
  displayData(){
	  this.showEmployee();
      console.log("Data : "+ this.employee);
	  for(var x in this.employee)
	  {
		  console.log(this.employee[x]["id"]);
	  }
  }
  
  onDelete(){
	  this.service.deleteEmployee(this.deleteId)
      .subscribe((data) => {
    console.log("Deleted Successfully");
    // for testing comment the below line
	  window.location.reload();
	  alert("Reload Page ...");
	  });
	  
  }
  setDeleteId(id){
	  this.deleteId = id;
  }
  removeDeleteId(){
	  this.deleteId = null;
  }

  showEmployee() {
    this.service.getEmployees()
      .subscribe((data) => {
	  
	  this.employee = data;
	  this.loading = false;
	  });
  }

  isLoading(){
		  return this.loading;
  }
  isError(){
	  return this.error;
  }


}
