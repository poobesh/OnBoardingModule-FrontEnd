import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService,AuthServiceConfig,GoogleLoginProvider } from 'angularx-social-login';
import { HomeComponent } from './home.component';
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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
