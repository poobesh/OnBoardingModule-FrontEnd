import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsComponent } from './trends.component';
import { AuthService,GoogleLoginProvider,AuthServiceConfig} from 'angularx-social-login';
import { RouterTestingModule} from '@angular/router/testing';
import { TrendsServices } from './services/trends.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ITrendData} from './models/ITrendData';

const config =  new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("738537876054-lpdjj61jdpve9ghletgun0gp4d6acarm.apps.googleusercontent.com")
  }
]);
export function provideConfig(){
  return config;
}
describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;
  let service: TrendsServices;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsComponent ],
      imports: [ RouterTestingModule,HttpClientTestingModule],
      providers:[
        {provide:AuthService,AuthServiceConfig, useFactory:provideConfig},
        TrendsServices
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
	service = TestBed.get(TrendsServices);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Sholud return loading as true',()=>{
	  component.isLoading();
	  expect(component.loading).toBeTruthy();
  });
  it('Sholud set Loading as False and Get All names of the companies',()=>{
	  const dummyNames: string[] = ["ABC","XYZ"];
			
			const request = httpMock.expectOne("http://localhost:8080/trends");
			expect(request.request.method).toBe('GET');
			request.flush(dummyNames);
	  component.ngOnInit();
	  expect(component.companies).toEqual(dummyNames);
	  expect(component.loading).toBeFalsy();
	  
  });
  it('Should signout i.e set Localstorage as null',()=>{
	  //component.signOut();
	  expect(localStorage.getItem('user_email')).toEqual(null);
  });
  
  /*it('Should signout i.e set Localstorage as null',()=>{
	  component.viewData();
	  const dummyTrends: ITrendData[] = [ 
											
											{
												
												"company_name":"ABC",
												"required_employee_count":123,
												"year":2019
											},
											{
												"company_name":"ABC",
												"required_employee_count":3,
												"year":2020
											}
										];
			component.myGroup.controls.dropDownText.setValue('ABC');
			const request = httpMock.expectOne("http://localhost:8080/trends/ABC");
			expect(request.request.method).toBe('GET');
			request.flush(dummyTrends);
	  //expect(localStorage.getItem('user_email')).toEqual(null);
  });
  */
  
});
