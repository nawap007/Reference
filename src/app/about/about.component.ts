import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  id = '';
  name='';
  constructor(private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.params['id'];
    this.name= this.activeRoute.snapshot.queryParams['name'];
  }

  ngOnInit() {
  }

}
