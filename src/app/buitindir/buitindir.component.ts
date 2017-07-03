import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buitindir',
  templateUrl: './buitindir.component.html',
  styleUrls: ['./buitindir.component.css']
})
export class BuitindirComponent implements OnInit {
  num: number;
  colors:any[] = ['red', 'blue', 'green'];
  alphabet:string;
  constructor() { }

  ngOnInit() {
  }

}
