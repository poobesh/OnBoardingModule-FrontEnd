import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './view/edit/edit.component';
import  { LogoutComponent } from '../logout/logout.component';
import { AuthGuard } from '../auth-guard';

const routes: Routes = [
  {path:'',component:ViewComponent,canActivate: [AuthGuard]},
  {path:'edit/:id',component:EditComponent,canActivate: [AuthGuard]}, 
  {path:'create',component:CreateComponent,canActivate: [AuthGuard] }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule { }
