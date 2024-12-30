import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink,
            MatDividerModule, MatIconModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  sections = [
    {
      title: 'איסוף מידע',
      content: `אנו אוספים מידע בסיסי כגון:
      • שם מלא
      • כתובת אימייל
      • מספר טלפון
      המידע נאסף רק בהסכמתך המפורשת ומשמש אותנו ליצירת קשר ושיפור השירות.`
    },
    {
      title: 'אבטחת מידע',
      content: `אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלך:
      • הצפנת SSL/TLS
      • אחסון מאובטח
      • גישה מוגבלת למידע רגיש`
    },
    {
      title: 'שיתוף מידע',
      content: 'איננו משתפים את המידע האישי שלך עם צדדים שלישיים ללא הסכמתך המפורשת.'
    },
    {
      title: 'זכויותיך',
      content: `יש לך זכות מלאה:
      • לבקש עיון במידע שלך
      • לבקש תיקון מידע שגוי
      • לבקש מחיקת המידע שלך`
    }
  ];

}
