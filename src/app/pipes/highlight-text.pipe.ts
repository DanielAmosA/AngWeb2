import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightText',
  standalone: true
})

export class HighlightTextPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, word: string): SafeHtml {
    if (!value || !word) return value;

    // החלפת המילה עם HTML מודגש
    const regex = new RegExp(`(${word})`, 'gi');
    const highlighted = value.replace(regex, `<span style="color: red; font-weight: bold;">$1</span>`);

    // סימון התוכן כבטוח לשימוש
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
