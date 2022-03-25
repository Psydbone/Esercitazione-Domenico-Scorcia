import { Component, VERSION } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 //name = 'Angular ' + VERSION.major;
  public name : string;
  public cognome :string;
  constructor(private testService:TestService){
    this.name = this.testService.getMessage('Domenico');
    this.cognome = this.testService.getCognome('Scorcia');
  }
}

export class Test{
  
}
