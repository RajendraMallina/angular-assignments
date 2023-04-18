import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHeaderComponent,
    StudentTableComponent,
    EmployeeTableComponent,
    EmployeeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
