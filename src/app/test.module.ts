import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { Test1Component } from './test1.component';

@NgModule({
  declarations: [TestComponent,Test1Component],
  exports : [TestComponent,Test1Component]
})

export class TestModule{}


