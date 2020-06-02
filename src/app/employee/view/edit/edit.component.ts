import { Component, OnInit } from '@angular/core';


import { AuthService } from 'angularx-social-login';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,  Validators , FormBuilder , FormControl} from '@angular/forms';
import { EmployeeServices } from '../../employee.services';
import { Employee } from '../../employee';
import { IDemand } from '../../models/IDemand';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

   employeeId : string;
   public skills=["Angular","Java","C/c++","Python","SQL"];
   public skill_1_MatchingDemands : IDemand[];
	public skill_2_MatchingDemands : IDemand[];
	public skill_3_MatchingDemands : IDemand[]
	private demandSkills : IDemand[];
	public employeeForm:FormGroup;
   public name = "Poobesh";
   
   public isFormInValid:boolean = true;
   
   private employee:any;
  

  constructor(private authService: AuthService, private routes : Router , private activatedRoute: ActivatedRoute , private service : EmployeeServices , private fb : FormBuilder) { 
     
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{ this.employeeId = params.get('id') } );
    this.service.getEmployee(this.employeeId)
      .subscribe((data) => {
	  console.log("GET Value : "+ data["bgc"]);
	  this.employeeForm = this.fb.group({
		id: [data['id'],[Validators.required,Validators.minLength(3)]],
		email:[data['email'],[Validators.required, Validators.email , Validators.maxLength(50)]] ,
		version: [data['version']],
		first_name: [data['first_name'],[Validators.required,Validators.maxLength(15)]],
		last_name: [data['last_name'],[Validators.required,Validators.maxLength(15)]],
		dob: [data['dob'],[Validators.required]],
		blood_type: [data['blood_type'],[Validators.required,Validators.maxLength(5)]],
		gender: [data['gender'],Validators.required],
		date_of_joining: [data['date_of_joining'],Validators.required],
		permanent_address: [data['permanent_address'],[Validators.required,Validators.maxLength(50)]],
		pan_number: [data['pan_number'],[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
		skill_1:[data['skill_1'],[Validators.required]],
		skill_2:[data['skill_2'],[Validators.required]],
		skill_3:[data['skill_3'],[Validators.required]],
		experience: [data['experience'],[Validators.required,Validators.pattern('^[0-9]')]],
		phone_number: [data['phone_number'],[Validators.required, Validators.pattern('[6-9]\\d{9}')]],
		current_address: [data['current_address'],Validators.required],
		designation: [data['designation'],[Validators.required,Validators.maxLength(20)]],
		bank_ac_no: [data['bank_ac_no'],[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
		ifsc_code:[data['ifsc_code'],[Validators.required,Validators.maxLength(10)]],
		branch:[data['branch'],[Validators.required,Validators.maxLength(30)]],
		name:[data['name'],[Validators.required,Validators.maxLength(30)]],
		demand_id: [data['demand_id']],
		bgc: [data['bgc'],Validators.required],
		c_pincode: [data['c_pincode'],Validators.required],
		p_pincode:[data['p_pincode'],Validators.required] 
   });
	  });
	    
	
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
	console.log("INside submit");
	console.warn(this.employeeForm);
	this.setEmployee();
	console.log("Employee + "+ this.employee);
	
	this.service
		.updateEmployee(this.employee,this.employeeId)
		.subscribe(hero => {console.log("Updated Employee + "+ this.employee);});
		this.routes.navigate(['home']);
  }
  signOut(): void {
    localStorage.removeItem('user_email');
    this.authService.signOut();
	console.log(localStorage.getItem('user_email'));
    this.routes.navigate(['logout']);

  }
  onChange(): void{
    console.warn(this.employeeForm);
  }

  onChangeSkill_1(): void{
	this.skill_1_MatchingDemands = this.demandSkills.filter(
		demand => demand.demandSkill === this.employeeForm.get('skill_1').value
		);
  console.warn(this.skill_1_MatchingDemands);
}
onChangeSkill_2(): void{
	  this.skill_2_MatchingDemands = this.demandSkills.filter(
		  demand => demand.demandSkill === this.employeeForm.get('skill_2').value
		  );
  console.warn(this.skill_2_MatchingDemands);
  }
  onChangeSkill_3(): void{
	  this.skill_3_MatchingDemands = this.demandSkills.filter(
		  demand => demand.demandSkill === this.employeeForm.get('skill_3').value
		  );
  console.warn(this.skill_3_MatchingDemands);
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
  



}
