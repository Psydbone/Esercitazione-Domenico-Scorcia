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
import { ArraayDirective } from './array.directive';
import { RegisterUserComponent } from './register-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,TestModule],
  declarations: [ AppComponent, HelloComponent, TestDirective,TableComponent,ArraayDirective, RegisterUserComponent],
  providers : [TestService,TestService2,ArrayService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
