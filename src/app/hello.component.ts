import { Component, Input, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor(private TestService: TestService){}

  ngOnInit(): void{
    this.name = this.TestService.getMessage('Utente');
  }
}
