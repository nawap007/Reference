import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {
  company: string;
  constructor() {
    this.company = "Dot Net Tricks";
  }

  ngOnInit() {
  }

}
