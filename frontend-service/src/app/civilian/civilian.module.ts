import { FormsModule } from '@angular/forms';
import { CivilianRoutingModule } from './civilian-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    CivilianRoutingModule,
    CivilianRoutingModule,
    NgbModule,
    FormsModule,
  ],
})
export class CivilianModule {}
