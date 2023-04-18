import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { CardHoverDirective } from './directives/directives';

@NgModule({
  declarations: [
    AppComponent,
    StudentHeaderComponent,
    StudentTableComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
