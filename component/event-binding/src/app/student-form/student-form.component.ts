import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  nameValue:any='';
  ageValue:any='';
  emailValue:any='';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    var field:any = document.getElementById('name'); 
    this.nameValue= field.getAttribute('value');
    var field1:any = document.getElementById('age'); 
    this.ageValue= field1.getAttribute('value');
    var field2:any = document.getElementById('email'); 
    this.emailValue= field2.getAttribute('value');
    //console.log(currentValue);
  }

}
