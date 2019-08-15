import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-App';
  constructor() {
    const now = moment();
    console.log('hello World', now.format());
    console.log(now.add(7, 'days').format());
  }
}
