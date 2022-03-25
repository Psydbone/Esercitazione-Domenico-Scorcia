import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[array-directive]',
})
export class ArraayDirective implements OnInit {
  @Input() temperature: number;
  constructor(private element: ElementRef<HTMLElement>) {}
  ngOnInit() {
    if (this.temperature > 37) {
      this.element.nativeElement.style.backgroundColor = 'red';
  }
}
}
