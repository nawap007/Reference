import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtinpipe',
  templateUrl: './builtinpipe.component.html',
  styles: []
})
export class BuiltinpipeComponent implements OnInit {
  employees=[];
  constructor() {
    this.employees=[
      {name:'Shailendra',address:'Noida',salary:10000,joining:new Date()},
      {name:'Ankit',address:'Delhi',salary:11000,joining:new Date()},
      {name:'Mohan',address:'Gurgaon',salary:8000,joining:new Date()}
    ]
   }

  ngOnInit() {
  }

}
