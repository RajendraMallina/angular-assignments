import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {
  title:any="enter title"
  constructor() { }

  ngOnInit(): void {
  }

}
