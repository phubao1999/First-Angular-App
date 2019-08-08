import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  name: '';
  currentStyle = { color: 'red', fontSize: '30px' };
  constructor() { }

  ngOnInit() {
  }
}
