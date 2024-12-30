import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomUppercasePipe } from '../../pipes/custom-uppercase.pipe';
import { TextToEmojiPipe } from '../../pipes/text-to-emoji.pipe';
import { HighlightTextPipe } from '../../pipes/highlight-text.pipe';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { ChangeFontDirective } from '../../directives/change-font.directive';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { DragDirective } from '../../directives/drag.directive';
import { ColorChangePipe } from '../../pipes/color-change.pipe';
import { AnimationDirective } from '../../directives/animation.directive';

@Component({
  selector: 'app-post-binding-demo',
  standalone: true,
  imports: [FormsModule,
           CustomUppercasePipe,TextToEmojiPipe,HighlightTextPipe,CapitalizePipe,DateFormatPipe,ColorChangePipe,
          ChangeFontDirective,HighlightDirective,TooltipDirective,DragDirective,AnimationDirective],
  templateUrl: './post-binding-demo.component.html',
  styleUrl: './post-binding-demo.component.scss'
})
export class PostBindingDemoComponent {
  // נתונים עבור הדגמת One-Way Data Binding
  oneWayData: string = 'This is One-Way Data Binding';

  // נתונים עבור הדגמת Two-Way Data Binding
  twoWayData: string = '';
Binding: any;
}
