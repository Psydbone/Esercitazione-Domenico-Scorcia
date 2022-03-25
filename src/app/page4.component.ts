import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArrayService, Person } from './array.service';

@Component({
  selector: 'page4-component',
  templateUrl: './page4.component.html',
})
export class Page4Component {

  myArray: Array<Person>;
  firstPerson : Person
  constructor(private personArray: ArrayService) {
    this.myArray = this.personArray.GetPersonArray();
    this.firstPerson = this.myArray[0];

  }


}