import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {
  @Input() title?:any;
  constructor() { }

  ngOnInit(): void {
  }

}
