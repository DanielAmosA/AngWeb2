import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input() appTooltip: string = '';
  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltip = this.renderer.createElement('span');
    this.tooltip!.innerText = this.appTooltip;
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'background', 'linear-gradient(45deg, #1e90ff, #87ceeb)');
    this.renderer.setStyle(this.tooltip, 'color', 'white');
    this.renderer.setStyle(this.tooltip, 'padding', '8px 12px');
    this.renderer.setStyle(this.tooltip, 'borderRadius', '8px');
    this.renderer.setStyle(this.tooltip, 'boxShadow', '0 4px 6px rgba(0, 0, 0, 0.1)');
    this.renderer.setStyle(this.tooltip, 'fontSize', '14px');
    this.renderer.setStyle(this.tooltip, 'fontWeight', 'bold');
    this.renderer.setStyle(this.tooltip, 'zIndex', '1000');
    this.renderer.setStyle(this.tooltip, 'transition', 'opacity 0.3s ease');
    this.renderer.setStyle(this.tooltip, 'opacity', '0');
    this.renderer.setStyle(
      this.tooltip,
      'top',
      `${this.el.nativeElement.offsetTop - 30}px`
    );
    this.renderer.setStyle(
      this.tooltip,
      'left',
      `${this.el.nativeElement.offsetLeft}px`
    );

    this.renderer.appendChild(document.body, this.tooltip);

    // הוספת השהיה קצרה להצגת ה-Tooltip
    setTimeout(() => {
      this.renderer.setStyle(this.tooltip, 'opacity', '1');
    }, 50);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}
