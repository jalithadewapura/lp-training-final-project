import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { FamilyRoutingModule } from './family-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FamilyRoutingModule,
    FormsModule
  ]
})
export class FamilyModule { }
