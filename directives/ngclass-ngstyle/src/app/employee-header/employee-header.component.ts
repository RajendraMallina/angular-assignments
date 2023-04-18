import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  changeClass:boolean=false;
  empTableData:any=[
    { "Name":"Rajendra","Age":"28",	"Email":"Rajendra@gmail.com" },
    { "Name":"Ramu","Age":"25",	"Email":"Ramu@gmail.com" },
    { "Name":"Vamsi","Age":"26",	"Email":"Vamsi@gmail.com" },
    { "Name":"Raju","Age":"2",	"Email":"Raju@gmail.com" }];
  constructor() { }

  ngOnInit(): void {
  }

  changeClasstable(){
    this.changeClass=!this.changeClass;
  }

}
