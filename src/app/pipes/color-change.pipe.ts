import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorChange',
  standalone: true,
})
export class ColorChangePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | number): SafeHtml {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
    const index = Math.abs(
      typeof value === 'number' ? value % colors.length : value.length % colors.length
    );

    const coloredText = `<span style="color: ${colors[index]}; font-weight: bold;">${value}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(coloredText);
  }
}
