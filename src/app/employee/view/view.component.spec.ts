import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { AuthService,GoogleLoginProvider,AuthServiceConfig} from 'angularx-social-login';
import { RouterTestingModule} from '@angular/router/testing';
import { EmployeeServices} from '../services/employee.services';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Employee} from '../models/employee';

const config =  new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("738537876054-lpdjj61jdpve9ghletgun0gp4d6acarm.apps.googleusercontent.com")
  }
]);
export function provideConfig(){
  return config;
}

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let service: EmployeeServices;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[
        {provide:AuthService,AuthServiceConfig, useFactory:provideConfig},
        EmployeeServices
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
	service = TestBed.get(EmployeeServices);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Get all Employees For Displaying ',() => {
		  
		  const dummyEmployee: Employee[] = [
												{

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

												}
											
											];
											
			//component.showEmployee();
			const request = httpMock.expectOne("http://localhost:8080/employees");
			//expect(request.request.method).toBe('GET');

			request.flush(dummyEmployee);
            component.showEmployee();
			expect(component.loading).toBeFalsy();
      });
	  it('Sholud return loading as true',()=>{
	  component.isLoading();
	  expect(component.loading).toBeTruthy();
  });
	  
  it('should perform delete conditions ', () => {
	  component.setDeleteId(5);
    expect(component.deleteId).toEqual(5);
	component.removeDeleteId();
	expect(component.deleteId).toEqual(null);
  });
  it('should Delete the Employee of Given Id ',() => {
		  
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
			component.deleteId = 1;									
			component.onDelete();
			
			const request = httpMock.expectOne("http://localhost:8080/employees/1");
			expect(request.request.method).toBe('DELETE');
			request.flush(dummyEmployee);

      });
    it('should Get all Employees For Displaying on Initialization ',() => {
		  
		  const dummyEmployee: Employee[] = [
												{

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

												}
											
											];
											
			//component.showEmployee();
			const request = httpMock.expectOne("http://localhost:8080/employees");
			//expect(request.request.method).toBe('GET');

			request.flush(dummyEmployee);
            component.ngOnInit();
			expect(component.loading).toBeFalsy();
      });
	  it('Sholud return loading as true',()=>{
	  component.isLoading();
	  expect(component.loading).toBeTruthy();
  });
  it('Sholud return Error as falsy',()=>{
	  component.isError();
	  expect(component.error).toBeFalsy();
  });
  it('should  Display Employee Data ',() => {
		  
		  const dummyEmployee: Employee[] = [
												{

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

												}
											
											];
											
			//component.showEmployee();
			const request = httpMock.expectOne("http://localhost:8080/employees");
			//expect(request.request.method).toBe('GET');

			request.flush(dummyEmployee);
            component.displayData();
			expect(component.loading).toBeFalsy();
      });
	  it('Sholud return loading as true',()=>{
	  component.isLoading();
	  expect(component.loading).toBeTruthy();
  });
});
