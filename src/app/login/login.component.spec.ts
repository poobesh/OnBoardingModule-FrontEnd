import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService, GoogleLoginProvider, AuthServiceConfig } from 'angularx-social-login';
import { LoginComponent } from './login.component';
import { RouterTestingModule} from '@angular/router/testing';
const config =  new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("738537876054-lpdjj61jdpve9ghletgun0gp4d6acarm.apps.googleusercontent.com")
  }
]);
export function provideConfig(){
  return config;
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule
      ],
      providers:[
        {provide:AuthService,AuthServiceConfig, useFactory:provideConfig}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Sholud return loggedIn as false',()=>{
	  component.isLoggedIn();
	  expect(component.loggedIn).toBeFalsy();
  });
  it('Sholud return loggedIn as false onInit',()=>{
	  component.ngOnInit();
	  expect(component.loggedIn).toBeFalsy();
  });
 /* it('Sholud return loggedIn as true after login',()=>{
	  component.signInWithGoogle();
	  expect(component.loggedIn).toBeTruthy();
  }); */
  
});
