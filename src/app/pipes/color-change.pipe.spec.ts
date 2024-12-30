import { ColorChangePipe } from './color-change.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('ColorChangePipe', () => {
  let pipe: ColorChangePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    // יצירת Mock עבור DomSanitizer
    sanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);
    pipe = new ColorChangePipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should wrap the value in a span with dynamic color', () => {
    const mockValue = 'Angular';
    const mockResult = `<span style="color: red; font-weight: bold;">Angular</span>`;

    (sanitizer.bypassSecurityTrustHtml as jasmine.Spy).and.returnValue(mockResult);

    const result = pipe.transform(mockValue);

    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  it('should return consistent color for the same input', () => {
    const mockValue = 'Test';
    const mockResult = `<span style="color: blue; font-weight: bold;">Test</span>`;

    (sanitizer.bypassSecurityTrustHtml as jasmine.Spy).and.returnValue(mockResult);

    const result1 = pipe.transform(mockValue);
    const result2 = pipe.transform(mockValue);

    expect(result1).toBe(result2);
    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledTimes(2);
  });

  it('should handle empty input gracefully', () => {
    const mockValue = '';
    const mockResult = `<span style="color: red; font-weight: bold;"></span>`;

    (sanitizer.bypassSecurityTrustHtml as jasmine.Spy).and.returnValue(mockResult);

    const result = pipe.transform(mockValue);

    expect(result).toBe(mockResult);
    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
  });

  it('should return different colors for different inputs', () => {
    const value1 = 'Test1';
    const value2 = 'Test2';
    const result1 = pipe.transform(value1);
    const result2 = pipe.transform(value2);

    expect(result1).not.toBe(result2);
  });
});
