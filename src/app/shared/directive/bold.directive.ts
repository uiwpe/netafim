import { Directive, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[ttBold]'
})
export class BoldDirective {
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2){
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    this.renderer.setStyle(this.elementRef.nativeElement, "font-family", "Lato-Bold, sans‑serif");
  }
}
