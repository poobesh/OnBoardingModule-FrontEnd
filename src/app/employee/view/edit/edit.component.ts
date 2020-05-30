import { Component, OnInit } from '@angular/core';


import { AuthService } from 'angularx-social-login';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,  Validator , FormBuilder , FormControl} from '@angular/forms';
import { EmployeeServices } from '../../employee.services';
import { Employee } from '../../employee';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

   employeeForm = new FormGroup({
	   firstName : new FormControl('')
   });
   emp: Employee;
   employeeId : string;
  
  

  constructor(private authService: AuthService, private routes : Router , private activatedRoute: ActivatedRoute , private service : EmployeeServices , private fb : FormBuilder) { 
     
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{ this.employeeId = params.get('id') } );
    this.service.getEmployee(this.employeeId)
      .subscribe((data) => {
	  console.log("GET Value : "+ data["first_name"]);
	  this.emp = data;
	  console.log("Data : "+this.emp['email']);
	  })
	    
	
  }
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log("Data : "+this.emp['last_name']);
  console.log("INside Submit");
}
  
  signOut(): void {
    localStorage.removeItem('user_email');
    this.authService.signOut();
	console.log(localStorage.getItem('user_email'));
    this.routes.navigate(['logout']);

  }

  setUnChangeableValues(){

  }



}
