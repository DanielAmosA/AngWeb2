import { DragDirective } from './drag.directive';
import { ElementRef } from '@angular/core';

describe('DragDirective', () => {
  let directive: DragDirective;
  let mockElementRef: ElementRef;
  let mockNativeElement: HTMLElement;

  beforeEach(() => {
    mockNativeElement = document.createElement('div');
    mockElementRef = new ElementRef(mockNativeElement);
    directive = new DragDirective(mockElementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set isDragging to true on mousedown', () => {
    const mouseDownEvent = new MouseEvent('mousedown');
    directive.onMouseDown(mouseDownEvent);

    expect(directive['isDragging']).toBeTrue();
  });

  it('should set isDragging to false on mouseup', () => {
    directive['isDragging'] = true; // Simulate dragging
    const mouseUpEvent = new MouseEvent('mouseup');
    directive.onMouseUp();

    expect(directive['isDragging']).toBeFalse();
  });

  it('should update element position on mousemove while dragging', () => {
    directive['isDragging'] = true;
    directive['offsetX'] = 10;
    directive['offsetY'] = 20;

    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 200,
    });

    directive.onMouseMove(mouseMoveEvent);

    expect(mockNativeElement.style.position).toBe('absolute');
    expect(mockNativeElement.style.left).toBe('90px');
    expect(mockNativeElement.style.top).toBe('180px');
  });

  it('should not update position on mousemove when not dragging', () => {
    directive['isDragging'] = false;

    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 200,
    });

    directive.onMouseMove(mouseMoveEvent);

    expect(mockNativeElement.style.left).toBe('');
    expect(mockNativeElement.style.top).toBe('');
  });
});
