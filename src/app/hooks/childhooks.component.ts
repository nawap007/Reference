import { Component, OnInit, Input, OnDestroy, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-childhooks',
  templateUrl: './childhooks.component.html',
  styles: []
})
export class ChildhooksComponent implements OnInit, OnDestroy, DoCheck, OnChanges {
  @Input() company;
  colors = ['red', 'blue'];
  constructor() {
    console.log('Child : constructor');
  }

  ngOnInit() {
    console.log('child : ngOnInit');
  }
  ngOnDestroy() {
    console.log('child : ngOnDestroy');
  }
  ngDoCheck() {
    console.log('child : ngDoCheck');
  }
  ngOnChanges(changes) {
    console.log('child : ngOnChanges');
    console.log(changes);
  }

  AddRow() {
    this.company = this.colors;
  }
}
