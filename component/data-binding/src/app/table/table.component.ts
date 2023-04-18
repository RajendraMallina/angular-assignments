import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  studentTableData:any=[
    { "Name":"Rajendra","Age":"28",	"Email":"Rajendra@gmail.com" },
    { "Name":"Ramu","Age":"25",	"Email":"Ramu@gmail.com" },
    { "Name":"Vamsi","Age":"26",	"Email":"Vamsi@gmail.com" },
    { "Name":"Raju","Age":"2",	"Email":"Raju@gmail.com" }]
  constructor() { }

  ngOnInit(): void {
  }

}
