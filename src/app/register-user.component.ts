import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  inputForm: FormGroup;

  constructor() {
    this.inputForm = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      temperature: new FormControl(''),
    });
  }

  register() {
    console.log('register');
    console.log(this.inputForm.value.name);
  }
}
