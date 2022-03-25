import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
})
export class TestComponent implements OnInit {
   @Input() testProperty: number ;
   @Output() emitter: EventEmitter<void> = new EventEmitter();

  constructor() {
    //this.testProperty = 'Costruttore';
  }
  ngOnInit(): void {
    //this.testProperty ='onInit';
  }

  handler(){
    this.emitter.emit();
    console.log('clicked');
  }
}
