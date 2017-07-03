import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  @Input() myCompany;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  SendMsg(){
    this.notify.emit('Hi From Child');
  }
  ngOnInit() {
  }

}
