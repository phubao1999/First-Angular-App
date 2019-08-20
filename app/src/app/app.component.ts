import { Component } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

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
    console.log(_.compact([0, 1, false, true, 3, 5, 10]));
  }
}
