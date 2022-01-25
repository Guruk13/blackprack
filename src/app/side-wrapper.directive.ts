import { Directive, ElementRef, Renderer2, Input,} from '@angular/core';

@Directive({
  selector: '[SideWrapperDirective]'
})
export class SideBarWrapperDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  open(){
    this.renderer.setStyle(this.el.nativeElement,"width", "100%" )
  }

  @Input()
  set event(event: Event) {
    if (event) {
      this.open();
    }
  }

}