import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CivilianModule } from './civilian/civilian.module';
import { FamilyModule } from './family/family.module';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    MainLayoutComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CivilianModule,
    FamilyModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
