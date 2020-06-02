import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth-guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './employee/view/view.component';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/view/edit/edit.component';
import  { LogoutComponent } from './logout/logout.component';
export const routes: Routes = [
  {path:'home',component:HomeComponent , canActivate: [AuthGuard] },
  {path:'employee',loadChildren: ()=> import ('./employee/employee.module').then(m => m.EmployeeModule)},
  {path:'logout',component:LogoutComponent },
  {path:'',component:LoginComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
