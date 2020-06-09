import { async, TestBed } from '@angular/core/testing';

import { TrendsServices } from './trends.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ITrendData} from './ITrendData';
import {map} from 'rxjs/operators';

describe('TrendsServices', () => {
  let service: TrendsServices;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrendsServices],
    });
    service = TestBed.get(TrendsServices);
    httpMock = TestBed.get(HttpTestingController);
	
  });
  
	  it('should be created', () => {
		expect(service).toBeTruthy();
	  });
	  it('should Get all Company Names',() => {
		  
		  const dummyNames: string[] = ["ABC","XYZ"];
			service.getCompanies().subscribe(data=>{
				
				expect(data).toEqual(dummyNames);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/trends");
			expect(request.request.method).toBe('GET');
			request.flush(dummyNames);

      });
	  
	 /* it("Should return Company trends for given company name", ()=>{
		  
		  const dummyTrends: ITrendData = 
											{
												
												"company_name":"ABC",
												"required_employee_count":123,
												"year":2019
											}
										;
										
			service.getTrendDatas("ABC").subscribe(data=>{
				
				expect(data).toEqual(dummyTrends);
			});
			
			const request = httpMock.expectOne("http://localhost:8080/trends/ABC");
			expect(request.request.method).toBe('GET');
			request.flush(dummyTrends);
	  });
  */
  
  
});
