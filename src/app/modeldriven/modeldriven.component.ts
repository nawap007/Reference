import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styles: []
})
export class ModeldrivenComponent implements OnInit {
  countryList:any[];
  regForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      Name: [null, Validators.required],
      Username: [null, [Validators.required, Validators.minLength(4)]],
      Password: [null, Validators.required],
      ConfirmPassword: [null, Validators.required],
      Contact: [null, Validators.pattern('^[789]\\d{9}$')],
      Country: ['', Validators.required],
      Address: [null],
      Terms: [null, Validators.required],
    });
    this.countryList=[{id:1,name:'India'},{id:2,name:'USA'}]
  }

  ngOnInit() {
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      alert('valid!');
      console.log(form.value);
    }
  }
}
