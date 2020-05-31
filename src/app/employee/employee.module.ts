import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './view/edit/edit.component';
import { DeleteComponent } from './view/delete/delete.component';
import { CreateComponent } from './create/create.component';
import { EmployeeRoutingModule } from './employee-routing.module';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [ViewComponent, EditComponent, DeleteComponent, CreateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
	Ng2SearchPipeModule,
  ]
})
export class EmployeeModule { }
