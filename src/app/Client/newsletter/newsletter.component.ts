import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
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
          Validators.maxLength(10),
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
  ngOnInit(): void {
    // this.userContact = new FormGroup({
    //   userName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   userPhoneNumber: new FormControl(),
    // //   userEmail: new FormControl(),
    // });
  }
  onSubmit() {}
}
