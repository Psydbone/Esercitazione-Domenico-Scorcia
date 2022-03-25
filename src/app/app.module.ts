import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent} from './app.component';
import { HelloComponent } from './hello.component';

import { TestModule } from './test.module';
import { TestService, TestService2 } from './test.service';
import { TestDirective } from './test.directive';
import { TableComponent } from './table.component';
import { ArrayService } from './array.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,TestModule],
  declarations: [ AppComponent, HelloComponent, TestDirective,TableComponent],
  providers : [TestService,TestService2,ArrayService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
