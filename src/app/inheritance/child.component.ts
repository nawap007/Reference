import { Component, OnInit } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent extends ParentComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
  ShowData() {
    alert(this.company);
  }
}
