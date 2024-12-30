import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appAnimation]',
  standalone: true,
})
export class AnimationDirective {
  @Input('appAnimation') animationType: string = 'bounce';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyAnimation(this.animationType);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeAnimation(this.animationType);
  }

  private applyAnimation(animation: string): void {
    this.renderer.addClass(this.el.nativeElement, 'animate__animated');
    this.renderer.addClass(this.el.nativeElement, `animate__${animation}`);
  }

  private removeAnimation(animation: string): void {
    this.renderer.removeClass(this.el.nativeElement, 'animate__animated');
    this.renderer.removeClass(this.el.nativeElement, `animate__${animation}`);
  }
}
