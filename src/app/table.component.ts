import { Component } from '@angular/core';
import { ArrayService, Person } from './array.service';

@Component({
  selector: 'table-component',
  templateUrl: `./table.template.html`,
})
export class TableComponent {
  data: Person[];
  constructor(private es: ArrayService) {
    this.data = this.es.getArray();
  }
}
