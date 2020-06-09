import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { AuthService,GoogleLoginProvider,AuthServiceConfig} from 'angularx-social-login';
import { RouterTestingModule} from '@angular/router/testing';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { EmployeeServices} from '../employee.services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IDemand } from '../models/IDemand';
import { HomeComponent} from '../../home/home.component';

const config =  new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("738537876054-lpdjj61jdpve9ghletgun0gp4d6acarm.apps.googleusercontent.com")
  }
]);
export function provideConfig(){
  return config;
}


describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let service: EmployeeServices;
  let httpMock: HttpTestingController;
  const fb:FormBuilder = new FormBuilder();
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent , HomeComponent],
      imports : [
        RouterTestingModule.withRoutes([{path:'home', component:HomeComponent}]),
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers:[
        {provide:AuthService,AuthServiceConfig, useFactory:provideConfig},
		{provide: FormBuilder , useValue: fb},
        EmployeeServices
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
	service = TestBed.get(EmployeeServices);
    httpMock = TestBed.get(HttpTestingController);
	
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
  
  it("Should initialize on Init ... ",()=>{
	  const dummyDemand : IDemand[] = [{
										demand_id : 1 ,
										skill : "Angular"
									 },
									 {
										demand_id : 2 ,
										skill : "Java"
									 },
									 {
										demand_id : 3 ,
										skill : "Sql"
									 }
									 ]; 
		const dummyIds: number[] = [1,2,3];
	  
	  
	  const requestForIds = httpMock.expectOne("http://localhost:8080/employees/ids");
	  const requestForDemands = httpMock.expectOne("http://localhost:8080/demands");
	  expect(requestForIds.request.method).toBe('GET');
	  expect(requestForDemands.request.method).toBe('GET');
	  requestForIds.flush(dummyDemand);
	  requestForDemands.flush(dummyIds);
	  component.ngOnInit();
	  //expect(component.Ids).toEqual(dummyIds);
	 // expect(component.demandSkills).toEqual(dummyDemand);
	  
	  
  });
  it('Should get values of Employee from form',()=>{
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
	  
	  component.onSubmit();
	  const request = httpMock.expectOne("http://localhost:8080/employees");	
	  expect(request.request.method).toBe('POST');
	  
  });
  
  it('Should set values of Employee from form',()=>{
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
	  
	  component.setEmployee();
	  expect(component.employee.id).toEqual(1);
	  
  });
  it('Should return an id is valid or not ',()=>{
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
   
	  component.Ids = [1,2,3];  
	  component.isIdValid();
	  expect(component.isFormInValid).toBeTruthy();
	  
  });
  
  it('Should return a dob is valid or not ',()=>{
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
   
	    
	  component.onChangeDob();
	  expect(component.dobValidator).toBeTruthy();
	  
  });
});
