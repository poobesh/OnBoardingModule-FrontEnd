import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { FormsModule ,FormGroup,  Validators , FormBuilder , FormControl} from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeServices } from '../employee.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	
	public skills=["Angular","Java","C/c++","Python","SQL"];
	public employeeForm:FormGroup;
	public name = "Poobesh";
	private Ids : number[]=[0];
	public isFormInValid:boolean = true;
    private employees:Employee[];
	private employee:any;
	
	
  constructor(private authService: AuthService, private routes : Router, private fb : FormBuilder , private service : EmployeeServices) { }

  ngOnInit(): void {
	  
	  this.employeeForm = this.fb.group({
		id: [,[Validators.required,Validators.pattern('[0-9]*')]],
		email:['',[Validators.required, Validators.email , Validators.maxLength(50)]] ,
		version: [0],
		first_name: ['',[Validators.required,Validators.maxLength(15)]],
		last_name: ['',[Validators.required,Validators.maxLength(15)]],
		dob: ['',[Validators.required]],
		blood_type: ['',[Validators.required,Validators.maxLength(5)]],
		gender: ['',Validators.required],
		date_of_joining: ['',Validators.required],
		permanent_address: ['',[Validators.required,Validators.maxLength(50)]],
		pan_number: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
		skill_1:['',[Validators.required]],
		skill_2:['',[Validators.required]],
		skill_3:['',[Validators.required]],
		experience: ['',[Validators.required,Validators.pattern('^[0-9][0-9]')]],
		phone_number: ['',[Validators.required, Validators.pattern('[6-9]\\d{9}')]],
		current_address: ['',Validators.required],
		designation: ['',[Validators.required,Validators.maxLength(20)]],
		bank_ac_no: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
		ifsc_code:['',[Validators.required,Validators.maxLength(10)]],
		branch:['',[Validators.required,Validators.maxLength(30)]],
		name:['',[Validators.required,Validators.maxLength(30)]],
		demand_id: [''],
		bgc: ['',Validators.required],
		c_pincode: ['',Validators.required],
		p_pincode:['',Validators.required] 
   });
   this.service.getEmployees()
      .subscribe((data) => {
	  //console.log("GET Value : "+data["id"])
	  this.Ids = data.map(({ id }) => id);
	  });

		console.warn(this.Ids);
  }

  signOut(): void {
    localStorage.removeItem('user_email');
    this.authService.signOut();
	console.log(localStorage.getItem('user_email'));
    this.routes.navigate(['logout']);

  }
  isIdVaild(){
	  console.log("Emp ID : "+this.employeeForm.get('id').value);
	  if(this.Ids.includes(this.employeeForm.get('id').value))
	  {
		  this.isFormInValid = true;
	  }
	  else
	  {
		  this.isFormInValid=false;
	  }
  }
  
  onChange(): void{
    console.warn(this.employeeForm);
  }
  
  setEmployee(){
	  this.employee = {
		'id': this.employeeForm.get('id').value,
        'email': this.employeeForm.get('email').value,
        'version': this.employeeForm.get('version').value,
        'first_name': this.employeeForm.get('first_name').value,
        'last_name': this.employeeForm.get('last_name').value,
        'dob': this.employeeForm.get('dob').value,
        'blood_type': this.employeeForm.get('blood_type').value,
        'gender': this.employeeForm.get('gender').value,
        'date_of_joining': this.employeeForm.get('date_of_joining').value,
        'permanent_address': this.employeeForm.get('permanent_address').value,
        'pan_number': this.employeeForm.get('pan_number').value,
        'experience': this.employeeForm.get('experience').value,
        'phone_number': this.employeeForm.get('phone_number').value,
        'current_address':this.employeeForm.get('current_address').value ,
        'designation': this.employeeForm.get('designation').value,
        'bank_ac_no': this.employeeForm.get('bank_ac_no').value,
		'ifsc_code': this.employeeForm.get('ifsc_code').value,
	    'branch': this.employeeForm.get('branch').value,
	    'name': this.employeeForm.get('name').value,
        'demand_id': this.employeeForm.get('demand_id').value,
        'bgc': this.employeeForm.get('bgc').value,
        'c_pincode': this.employeeForm.get('c_pincode').value,
        'p_pincode': this.employeeForm.get('p_pincode').value,
		'skill_1': this.employeeForm.get('skill_1').value,
        'skill_2': this.employeeForm.get('skill_2').value,
        'skill_3': this.employeeForm.get('skill_3').value
  };
  }
  

  onSubmit(): void{
    console.warn(this.employeeForm);
	this.setEmployee();
	console.log("Employee + "+ this.employee);
	
	this.service
		.addEmployee(this.employee)
		.subscribe(hero => {console.log("Posted Employee + "+ this.employee);});
		this.routes.navigate(['home']);

  }
      
}
