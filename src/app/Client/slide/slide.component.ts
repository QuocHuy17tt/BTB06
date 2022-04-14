import { Component, OnInit } from '@angular/core';
import { data2 } from '../../MockData';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slide = data2

}
