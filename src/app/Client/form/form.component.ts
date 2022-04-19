import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userContact: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.userContact = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userPhoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[0]+[0-9]{1,9}'),
        ],
      ],
      userEmail: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9]+.[a-z]{2,4}$'),
        ],
      ],
    });
  }
  ngOnInit(): void {}

  onSubmit(){

  }
}
