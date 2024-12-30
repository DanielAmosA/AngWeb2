import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink,
            MatDividerModule, MatIconModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {

  terms = [
    {
      title: 'תנאי שימוש',
      content: `השימוש באתר ובשירותים כפוף לתנאים הבאים:
      • יש להשתמש בשירות בצורה חוקית בלבד
      • אין להעתיק או להפיץ תכנים ללא אישור
      • יש לשמור על פרטיות משתמשים אחרים`
    },
    {
      title: 'קניין רוחני',
      content: 'כל התכנים והקוד באתר הם קניין רוחני בלעדי של Daniel Amos ומוגנים בזכויות יוצרים.'
    },
    {
      title: 'הגבלת אחריות',
      content: 'השירות ניתן "כפי שהוא" (AS IS). איננו אחראים לנזקים עקיפים או תוצאתיים.'
    }
  ];
}
