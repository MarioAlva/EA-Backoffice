import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clickRegister: boolean;
  clickForgot: boolean;

  constructor() {
    this.clickRegister = false;
    this.clickForgot = false;
  }

  ngOnInit(): void {
    
  }

}
