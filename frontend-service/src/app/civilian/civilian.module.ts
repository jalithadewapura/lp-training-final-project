import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CivilianRoutingModule } from './civilian-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentDateModule } from '@angular/material-moment-adapter';

import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    CivilianRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule
  ],
})
export class CivilianModule { }
