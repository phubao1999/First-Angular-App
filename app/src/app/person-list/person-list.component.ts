import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  arrPerson = [
    {name: 'Bao', age: 20},
    {name: 'Hien Luong', age: 20},
    {name: 'Cong', age: 20}
  ];
  constructor() { }

  ngOnInit() {
  }

  removePersonByName(name: string){
    const index = this.arrPerson.findIndex(e => e.name === name);
    this.arrPerson.splice(index, 1);
  }

}
