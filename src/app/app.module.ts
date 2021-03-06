import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule} from '@angular/router';
import {  routes } from "./routing/app-routing.module";
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from "angularx-social-login";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeServices } from './employee/services/employee.services';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { TrendsComponent } from './trends/trends.component';
import { ChartsModule } from 'ng2-charts';
import { TrendsServices } from './trends/services/trends.service';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogsComponent } from './logs/logs.component';

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
    LogoutComponent,
    TrendsComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes ),
    BrowserAnimationsModule,
    HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	ChartsModule
  ],
  providers: [
    {
      provide:AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true

    },
	  EmployeeServices,
    TrendsServices,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
