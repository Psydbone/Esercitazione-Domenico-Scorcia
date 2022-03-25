import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[test-directive]',
})
export class TestDirective implements OnInit {
  constructor(private element: ElementRef<HTMLElement>){
   
  }
ngOnInit(): void {
  this.element.nativeElement.getElementsByTagName('li')[0].style.color="red";
  this.element.nativeElement.style.color="blue";
}
}
