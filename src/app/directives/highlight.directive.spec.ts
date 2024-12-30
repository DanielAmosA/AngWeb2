import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    // יצירת Mock לאלמנט
    const mockElement = document.createElement('div');
    mockElementRef = new ElementRef(mockElement);
    directive = new HighlightDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set background color on mouseenter', () => {
    directive.appHighlight = 'blue'; // צבע לדוגמה
    directive.onMouseEnter();

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('blue');
  });

  it('should clear background color on mouseleave', () => {
    directive.onMouseLeave();

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('');
  });

  it('should use default color if no color is provided', () => {
    directive.onMouseEnter();

    expect(mockElementRef.nativeElement.style.backgroundColor).toBe('yellow'); // ברירת מחדל
  });
});
