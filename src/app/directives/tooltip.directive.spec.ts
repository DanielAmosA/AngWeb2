import { TooltipDirective } from './tooltip.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('TooltipDirective', () => {
  let directive: TooltipDirective;
  let mockElementRef: ElementRef;
  let mockRenderer: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    // יצירת Mock לאלמנט ול-Renderer2
    const mockElement = document.createElement('div');
    mockElementRef = new ElementRef(mockElement);
    mockRenderer = jasmine.createSpyObj('Renderer2', [
      'createElement',
      'setStyle',
      'appendChild',
      'removeChild',
    ]);

    directive = new TooltipDirective(mockElementRef, mockRenderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should create tooltip on mouseenter', () => {
    const tooltipElement = document.createElement('span');
    mockRenderer.createElement.and.returnValue(tooltipElement);

    directive.appTooltip = 'Test Tooltip';
    directive.onMouseEnter();

    expect(mockRenderer.createElement).toHaveBeenCalledWith('span');
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(
      tooltipElement,
      'position',
      'absolute'
    );
    expect(mockRenderer.appendChild).toHaveBeenCalledWith(
      document.body,
      tooltipElement
    );
    expect(tooltipElement.innerText).toBe('Test Tooltip');
  });

  it('should remove tooltip on mouseleave', () => {
    const tooltipElement = document.createElement('span');
    (directive as any).tooltip = tooltipElement;

    directive.onMouseLeave();

    expect(mockRenderer.removeChild).toHaveBeenCalledWith(
      document.body,
      tooltipElement
    );
    expect((directive as any).tooltip).toBeNull();
  });

  it('should not throw error if tooltip is null on mouseleave', () => {
    (directive as any).tooltip = null;

    expect(() => directive.onMouseLeave()).not.toThrow();
  });
});
