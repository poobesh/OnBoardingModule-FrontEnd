import { async, TestBed } from '@angular/core/testing';

import { EmployeeServices } from './employee.services';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Employee} from './Employee';
import {map} from 'rxjs/operators';
import { IDemand} from './models/IDemand';
describe('EmployeeServices', () => {
  let service: EmployeeServices;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeServices],
    });
    service = TestBed.get(EmployeeServices);
    httpMock = TestBed.get(HttpTestingController);
	
  });
  
	  it('should be created', () => {
		expect(service).toBeTruthy();
	  });
	  it('should Get all Employees ',() => {
		  
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
			service.getEmployees().subscribe(data=>{
				
				expect(data).toEqual(dummyEmployee);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/employees");
			expect(request.request.method).toBe('GET');
			request.flush(dummyEmployee);

      });
	  
	  it('should Get all Ids ',() => {
		  
		  const dummyIds: number[] = [1,2,3];
			service.getEmployeesIds().subscribe(data=>{
				
				expect(data).toEqual(dummyIds);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/employees/ids");
			expect(request.request.method).toBe('GET');
			request.flush(dummyIds);

      });
	  
	  it('should Get the Employee for Given Id ',() => {
		  
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
												
			service.getEmployee('1').subscribe(data=>{
				
				expect(data).toEqual(dummyEmployee);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/employees/1");
			expect(request.request.method).toBe('GET');
			request.flush(dummyEmployee);

      });
	  
	  it('should Add the Employee  ',() => {
		  
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
												
			service.addEmployee(dummyEmployee).subscribe(data=>{
				
				expect(data).toEqual(dummyEmployee);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/employees");
			//expect(request.request.method).toBe('POST');
			request.flush(dummyEmployee);

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
												
			service.deleteEmployee("1").subscribe(data=>{
				
				expect(data).toEqual(dummyEmployee);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/employees/1");
			expect(request.request.method).toBe('DELETE');
			request.flush(dummyEmployee);

      });
	  it('should Update the Employee of given Id ',() => {
		  
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
												
			service.updateEmployee(dummyEmployee,"1").subscribe(data=>{
				
				expect(data).toEqual(dummyEmployee);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/employees/1");
			expect(request.request.method).toBe('PUT');
			request.flush(dummyEmployee);

      });
	  
	  it("Should get All Demands ",() => {
		 const dummyDemand : IDemand[] = [{
										demand_id : 1 ,
										skill : "Angular"
									 },
									 {
										demand_id : 2 ,
										skill : "Java"
									 }]; 
									 
			service.getDemands().subscribe(data=>{
		 expect(data).toEqual(dummyDemand);
	 });
	 const request = httpMock.expectOne("http://localhost:8080/demands");
			expect(request.request.method).toBe('GET');
			request.flush(dummyDemand); 
	  });
	  
	 
  
  
});
