import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  colors:any="blue";
  studentTableData:any=[
    { "Name":"Rajendra","Age":"28",	"Email":"Rajendra@gmail.com" },
    { "Name":"Ramu","Age":"25",	"Email":"Ramu@gmail.com" },
    { "Name":"Vamsi","Age":"26",	"Email":"Vamsi@gmail.com" },
    { "Name":"Raju","Age":"2",	"Email":"Raju@gmail.com" }];
  constructor() { }

  ngOnInit(): void {
  }

  applyBlue(){
    this.colors="blue";
  }
  applyRed(){
    this.colors="red";
  }

}
