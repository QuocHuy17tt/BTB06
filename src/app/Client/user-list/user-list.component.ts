import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.productService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
}