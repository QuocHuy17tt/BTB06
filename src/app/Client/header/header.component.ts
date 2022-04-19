import { Component, OnInit } from '@angular/core';
import { listMenu } from '../../MockData';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  menu = listMenu;
}
