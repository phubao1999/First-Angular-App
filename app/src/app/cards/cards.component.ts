import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  contacts = [
    {id: 1, name: 'teo', phoneNumber: '0123'},
    {id: 2, name: 'ty', phoneNumber: '0456'},
    {id: 3, name: 'chuot', phoneNumber: '0789'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
