import { ChangeFontDirective } from './change-font.directive';
import { ElementRef } from '@angular/core';

describe('ChangeFontDirective', () => {
  let directive: ChangeFontDirective;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    // יצירת אלמנט מדומה (Mock ElementRef)
    mockElementRef = new ElementRef(document.createElement('p'));
    directive = new ChangeFontDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set font-family on mouseenter', () => {
    directive.appChangeFont = 'Courier New'; // ערך לדוגמה
    directive.onMouseEnter();
    expect(mockElementRef.nativeElement.style.fontFamily).toBe('Courier New');
  });

  it('should clear font-family on mouseleave', () => {
    directive.onMouseLeave();
    expect(mockElementRef.nativeElement.style.fontFamily).toBe('');
  });

  it('should use default font if none is provided', () => {
    directive.onMouseEnter();
    expect(mockElementRef.nativeElement.style.fontFamily).toBe('Arial'); // ברירת מחדל
  });
});
