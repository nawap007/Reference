import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-parenthooks',
  templateUrl: './parenthooks.component.html',
  styles: []
})
export class ParenthooksComponent implements OnInit {
  company: string;
  IsDestroy: boolean;
  constructor() {
    console.log('parent : constructor');
  }

  ngOnInit() {
    this.company="Dot Net Tricks";
    this.IsDestroy = false;
    console.log('parent : ngOnInit');
  }
  CreateDestroy() {
    this.IsDestroy = !this.IsDestroy;
  }
}
