import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  inputForm: FormGroup;
ArrayService: any;

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
    console.log(this.inputForm.value.surname);
    console.log(this.inputForm.value.temperature);
    this.ArrayService.AddPerson(this.inputForm.value.name, this.inputForm.value.surname, this.inputForm.value.temperature)
  }
}
