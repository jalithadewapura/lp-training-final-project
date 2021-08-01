import { DpDatePickerModule } from 'ng2-date-picker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CivilianModule } from './civilian/civilian.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    MainLayoutComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, CivilianModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
