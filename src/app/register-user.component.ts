import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArrayService } from './array.service';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  inputForm: FormGroup;

  constructor(private arrayService : ArrayService) {
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
    this.arrayService.AddPerson(this.inputForm.value.name, this.inputForm.value.surname, this.inputForm.value.temperature)
  }
}
