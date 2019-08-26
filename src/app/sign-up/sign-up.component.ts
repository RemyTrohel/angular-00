import { Component, OnInit } from '@angular/core';
import { SignUp } from '../signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup: SignUp = {
    email: 'email@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
