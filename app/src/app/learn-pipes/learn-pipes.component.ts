import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipes',
  templateUrl: './learn-pipes.component.html',
  styleUrls: ['./learn-pipes.component.css']
})
export class LearnPipesComponent implements OnInit {
  birthday = new Date();
  person = {name : 'Tuong Bao' , age: 19};
  address = Promise.resolve('114/1 Ha Huy Tap');
  constructor() { }

  ngOnInit() {
  }

}
