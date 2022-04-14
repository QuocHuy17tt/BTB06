import { Component, OnInit } from '@angular/core';
import { data1 } from '../../MockData';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  category = data1;


}
