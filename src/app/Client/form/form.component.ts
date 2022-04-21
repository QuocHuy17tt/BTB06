import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userContact: FormGroup;

  user: User = new User();
  constructor(private fb: FormBuilder, private productService: ProductService) {
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
  onAddUser() {
    this.productService.AddUser(this.user).subscribe((data) => {
      window.alert(data);
      this.userContact.reset();
    });
  }
}
