import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './view/edit/edit.component';
import { DeleteComponent } from './view/delete/delete.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [ViewComponent, EditComponent, DeleteComponent, CreateComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
