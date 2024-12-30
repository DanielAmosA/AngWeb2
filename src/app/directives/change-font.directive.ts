import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeFont]',
  standalone: true
})
export class ChangeFontDirective  {
  @Input() appChangeFont: string = 'Arial';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeFont(this.appChangeFont);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeFont('');
  }

  private changeFont(font: string): void {
    this.el.nativeElement.style.fontFamily = font;
  }
}
