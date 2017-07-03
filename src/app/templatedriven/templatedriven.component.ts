import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styles: []
})
export class TemplatedrivenComponent implements OnInit {
  user: User;
  countryList:any[];
  constructor() {
    this.user = new User();
    this.user.Country="";
    this.countryList=[{id:1,name:'India'},{id:2,name:'USA'}]
  }

  ngOnInit() {
  }
  SaveData(userForm : NgForm){
    if(userForm.valid){
      alert('form is valid!');
      console.log(this.user);
    }
  }
}
