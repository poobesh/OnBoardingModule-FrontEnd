import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './view/edit/edit.component';
import { DeleteComponent } from './view/delete/delete.component';
import  { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  {path:'',component:ViewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'create',component:CreateComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule { }
