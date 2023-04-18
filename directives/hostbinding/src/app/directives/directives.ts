import { Directive, ElementRef, HostBinding, HostListener, OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector:"[ccCardHover]"
})
export class CardHoverDirective { 
  @HostBinding('class.card-outline-primary')private ishovering: boolean=true;
  constructor(private el: ElementRef,
    private renderer: Renderer2){
      renderer.setStyle(el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
