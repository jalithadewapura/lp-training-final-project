import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    { path: 'family/create', component: CreateComponent },
    { path: 'family/update/:id', component: UpdateComponent },
    { path: 'families', component: ListComponent },
    { path: 'family/:id', component: ViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FamilyRoutingModule { }