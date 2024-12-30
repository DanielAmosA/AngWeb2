import { AnimationDirective } from './animation.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('AnimationDirective', () => {
  let directive: AnimationDirective;
  let mockElementRef: ElementRef;
  let mockRenderer: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    // יצירת Mock עבור ElementRef ו-Renderer2
    const mockElement = document.createElement('div');
    mockElementRef = new ElementRef(mockElement);
    mockRenderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);

    directive = new AnimationDirective(mockElementRef, mockRenderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply animation class on mouseenter', () => {
    directive.animationType = 'bounce';
    directive.onMouseEnter();

    expect(mockRenderer.addClass).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'animate__animated'
    );
    expect(mockRenderer.addClass).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'animate__bounce'
    );
  });

  it('should remove animation class on mouseleave', () => {
    directive.animationType = 'bounce';
    directive.onMouseLeave();

    expect(mockRenderer.removeClass).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'animate__animated'
    );
    expect(mockRenderer.removeClass).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'animate__bounce'
    );
  });

  it('should use default animation if none is provided', () => {
    directive.onMouseEnter();

    expect(mockRenderer.addClass).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'animate__animated'
    );
    expect(mockRenderer.addClass).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'animate__bounce'
    ); // ברירת מחדל
  });
});
