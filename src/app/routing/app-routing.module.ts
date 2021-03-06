import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth-guard';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { TrendsComponent } from '../trends/trends.component';
import { LogsComponent } from '../logs/logs.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent , canActivate: [AuthGuard] },
  {path:'employee',loadChildren: ()=> import ('../employee/employee.module').then(m => m.EmployeeModule)},
  {path:'logout',component:LogoutComponent },
  {path: 'data', component: TrendsComponent , canActivate: [AuthGuard]},
  {path: 'logs',component: LogsComponent , canActivate : [AuthGuard]},
  {path:'',component:LoginComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
