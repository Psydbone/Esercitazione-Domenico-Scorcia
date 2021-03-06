import { Component, Input } from '@angular/core';
import { ArrayService, Person } from './array.service';

@Component({
  selector: 'table-component',
  templateUrl: `./table.template.html`,
  styleUrls:['./table.component.css']
})
export class TableComponent {
  myArray: Array<Person>;
  constructor(private personArray: ArrayService) {
    this.myArray = this.personArray.GetPersonArray();
  }
}
