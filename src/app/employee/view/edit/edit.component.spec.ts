import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { AuthService,GoogleLoginProvider,AuthServiceConfig} from 'angularx-social-login';
import { RouterTestingModule} from '@angular/router/testing';
import { EmployeeServices} from '../../services/employee.services';
import { Employee} from '../../models/employee';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ReactiveFormsModule,FormGroup,  Validators , FormBuilder , FormControl} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable , of} from 'rxjs';
 

class MockActivatedRoute extends ActivatedRoute {
constructor(){
	super();
	this.params = of({id:"1"});
 
}
}
const config =  new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("738537876054-lpdjj61jdpve9ghletgun0gp4d6acarm.apps.googleusercontent.com")
  }
]);
export function provideConfig(){
  return config;
}

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const fb:FormBuilder = new FormBuilder();
  let service: EmployeeServices;
  let httpMock: HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports:[
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
		ReactiveFormsModule,
      ],
      providers:[
        {provide:AuthService,AuthServiceConfig, useFactory:provideConfig},
        EmployeeServices,
		{provide: FormBuilder , useValue: fb}
		
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
	service = TestBed.get(EmployeeServices);
    httpMock = TestBed.get(HttpTestingController);	
	
	
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Sholud return loading as true',()=>{
	  component.isLoading();
	  expect(component.loading).toBeTruthy();
  });
  it('Sholud return Error as falsy',()=>{
	  component.isError();
	  expect(component.error).toBeTruthy();
  });
  it('Sholud return matching demands ',()=>{
	  component.employeeForm = fb.group({    
		id: [1],
		email:['ram@c.m'] ,
		version: [0],
		first_name: ['ram'],
		last_name: ['raagu'],
		
		blood_type: ['O'],
		gender: ['Male'],
		
		permanent_address: ['Perm'],
		p_pincode:[789654] ,
		pan_number: ['TESTPANNO'],
		skill_1:['Angular'],
		skill_2:['C++'],
		skill_3:['JAVA'],
		experience: [1],
		phone_number: [9876054321],
		current_address: ['Current Address'],
		c_pincode: [987654],
		designation: ["DDE"],
		bank_ac_no: [1234567890],
		ifsc_code:["IFSC CODE"],
		branch:["SBI"],
		name:["Name"],
		demand_id: [1],
		bgc: [true]		
		
   });
	  component.demandSkills = [
								{"demand_id" : 1,  "skill" :"Angular" },
								{"demand_id" : 2,  "skill" : "Java"},
								{"demand_id" : 3,  "skill" : "Sql"}
								];
								component.employeeForm.controls.skill_1.setValue("Angular");
								component.employeeForm.controls.skill_2.setValue("Java");
								component.employeeForm.controls.skill_3.setValue("Sql");
								component.onChangeSkill_1();
								component.onChangeSkill_2();
								component.onChangeSkill_3();
	  expect(component.skill_1_MatchingDemands).toEqual([{"demand_id" : 1,  "skill" :"Angular" }]);
	  expect(component.skill_2_MatchingDemands).toEqual([{"demand_id" : 2,  "skill" : "Java"}]);
	  expect(component.skill_3_MatchingDemands).toEqual([{"demand_id" : 3,  "skill" : "Sql"}]);
  });
  it('Sholud return Employee  ',()=>{
	  component.employeeForm = fb.group({    
		id: [1],
		email:['ram@c.m'] ,
		version: [0],
		first_name: ['ram'],
		last_name: ['raagu'],
		
		blood_type: ['O'],
		gender: ['Male'],
		
		permanent_address: ['Perm'],
		p_pincode:[789654] ,
		pan_number: ['TESTPANNO'],
		skill_1:['Angular'],
		skill_2:['C++'],
		skill_3:['JAVA'],
		experience: [1],
		phone_number: [9876054321],
		current_address: ['Current Address'],
		c_pincode: [987654],
		designation: ["DDE"],
		bank_ac_no: [1234567890],
		ifsc_code:["IFSC CODE"],
		branch:["SBI"],
		name:["Name"],
		demand_id: [1],
		bgc: [true]		
		
   });
	  
	  expect(component.employeeForm.get('demand_id').value).toEqual(1);
	  
  });
  
  it('Sholud update Employee  ',()=>{
	  component.employeeForm = fb.group({    
		id: [1],
		email:['ram@c.m'] ,
		version: [0],
		first_name: ['ram'],
		last_name: ['raagu'],
		dob:['1999-03-12'],
		blood_type: ['O'],
		gender: ['Male'],
		date_of_joining: ['2020-03-22'],
		permanent_address: ['Perm'],
		p_pincode:[789654] ,
		pan_number: ['TESTPANNO'],
		skill_1:['Angular'],
		skill_2:['C++'],
		skill_3:['JAVA'],
		experience: [1],
		phone_number: [9876054321],
		current_address: ['Current Address'],
		c_pincode: [987654],
		designation: ["DDE"],
		bank_ac_no: [1234567890],
		ifsc_code:["IFSC CODE"],
		branch:["SBI"],
		name:["Name"],
		demand_id: [1],
		bgc: [true]		
		
   });
	  component.employeeId = '1';
	  component.onSubmit();
	  const request = httpMock.expectOne("http://localhost:8080/employees/1");	
	  
	  expect(request.request.method).toBe('PUT');
	  
  });
  
  /*
  it('Should set value of the employee forms on init',()=>{
	  component.employeeId= '1';
	  const dummyEmployee: Employee = {

													"id": 1,
													"email": "test@gmail.com",
													"version": 0,
													"first_name": "Test",
													"last_name": "Test",
													"blood_type": "O",
													"gender": "Male",
													"permanent_address": "Permanent Address",
													"pan_number": "AHJPP4857A",
													"skill_id": 1,
													"skill_1":"Angular",
													"skill_2":"Python",
													"skill_3":"Java",
													"experience": 5,
													"phone_number": 9876543210,
													"current_address": "Current Address",
													"designation": "SDE",
													"bank_ac_no": 16500493821,
													"ifsc_code":"SBIN0012345",
													"branch":"SBI TN",
													"name":"Test",
													"demand_id": 5,
													"bgc": true,
													"c_pincode": 987654,
													"p_pincode": 987654

												};
			
			const request = httpMock.expectOne("http://localhost:8080/employees/1");
			request.flush(dummyEmployee);
			  component.ngOnInit();
			  expect(component.employeeForm.get('Id').value).toEqual(1);
  });
  */
});
