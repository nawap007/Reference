import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[Highlighter],.Highlighter'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) {
    //this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
   @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
