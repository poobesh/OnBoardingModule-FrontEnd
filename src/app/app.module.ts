import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule} from '@angular/router';
import {  routes } from "./app-routing.module";
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from "angularx-social-login";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeServices } from './employee/employee.services';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


let config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("738537876054-lpdjj61jdpve9ghletgun0gp4d6acarm.apps.googleusercontent.com")
  }
]);
export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes ),
    BrowserAnimationsModule,
    HttpClientModule,
	  FormsModule,
	  ReactiveFormsModule,
  ],
  providers: [
    {
      provide:AuthServiceConfig,
      useFactory: provideConfig
    },
	  EmployeeServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
