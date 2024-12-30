import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDrag]',
  standalone: true
})
export class DragDirective {
  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  constructor(private el: ElementRef) {
      this.el.nativeElement.style.position = 'absolute';
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
      this.isDragging = true;

      const rect = this.el.nativeElement.getBoundingClientRect();

      // שמירת המיקום ההתחלתי כולל scroll position
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // חישוב ההיסט עם התחשבות ב-scroll
      this.offsetX = event.pageX - (rect.left + scrollLeft);
      this.offsetY = event.pageY - (rect.top + scrollTop);

      event.preventDefault();
  }

  @HostListener('mouseup') onMouseUp() {
      this.isDragging = false;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
      if (this.isDragging) {
          // שימוש ב-pageX/pageY במקום clientX/clientY
          const newLeft = event.pageX - this.offsetX;
          const newTop = event.pageY - this.offsetY;

          this.el.nativeElement.style.left = `${newLeft}px`;
          this.el.nativeElement.style.top = `${newTop}px`;
      }
  }
}
