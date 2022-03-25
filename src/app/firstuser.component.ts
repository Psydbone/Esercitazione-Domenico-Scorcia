import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from './array.service';

@Component({
  selector: 'firstuser-component',
  templateUrl: './firstuser.component.html',
})
export class firstUserComponent {
  @Input() user : Person; 
  constructor() {}



}