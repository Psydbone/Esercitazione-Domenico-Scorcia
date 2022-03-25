import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
})
export class TestComponent implements OnInit {
   @Input() testProperty: number ;

  constructor() {
    //this.testProperty = 'Costruttore';
  }
  ngOnInit(): void {
    //this.testProperty ='onInit';
  }

  handler(){
    console.log('clicked');
  }
}
