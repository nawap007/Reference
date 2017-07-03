import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  company:string='Dot Net Tricks';
  name:string ='Shailendra';
  address:string='Noida';
  url:string='http://www.dotnettricks.com'
  constructor() { }

  greet(){
    console.log('Hi!');
    console.log(this.name);
  }
}
