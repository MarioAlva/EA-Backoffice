import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickForgot: boolean; 
  date: Date;
  uponAge: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({});
    this.clickRegister = false;
    this.clickForgot = false;
    this.date = new Date();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateBirth: [ String(this.date.getFullYear() + '-' + this.date.getMonth() + "-" + this.date.getDate()), Validators.required],
    });
  }

  onSubmit() {
    let date = new Date();
    let birthday = new Date(this.registerForm.value.dateBirth);
    this.submitted = true;
    if (birthday.getFullYear() === date.getFullYear() - 13) {
      if(birthday.getFullYear() === date.getFullYear() - 13 && birthday.getMonth() <= date.getMonth()) {
        if(birthday.getFullYear() === date.getFullYear() - 13 && birthday.getMonth() === date.getMonth() && birthday.getDate() <= date.getDate()) {
          this.uponAge = true;
        }
        else{
          this.uponAge = false;
        }
      }
      else{
        this.uponAge = false;
      }
    } else if (birthday.getFullYear() < date.getFullYear() - 13) {
      this.uponAge = true;
    }else {
      this.uponAge = false;
    } 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
}

}
