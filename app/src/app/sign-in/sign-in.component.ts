import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';
  onSubmit(formSignIn){
    console.log(formSignIn.value);
    throw new Error ('Form Is in Valid')
  }
  constructor() { }

  ngOnInit() {
  }

}
