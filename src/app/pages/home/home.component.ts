import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIcon,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  features = [
    {
      icon: 'rocket',
      title: 'חדשנות',
      content: 'פתרונות טכנולוגיים מתקדמים'
    },
    {
      icon: 'security',
      title: 'אבטחה',
      content: 'אבטחת מידע ברמה הגבוהה ביותר'
    },
    {
      icon: 'speed',
      title: 'ביצועים',
      content: 'מהירות וביצועים ללא פשרות'
    }
  ];

  testimonials = [
    {
      name: 'איתי חביב',
      role: 'מפתח תוכנה',
      content: 'היכולת הטכנית והמקצועיות הם ברמה הגבוהה ביותר',
      image: 'assets/images/testimonials/itay.png'
    },
    {
      name: 'איתי כבתי',
      role: 'מנהל פרויקטים',
      content: 'כשדניאל עמוס עובד על משהו, אפשר להיות בטוחים שהתוצאה תהיה לא רק איכותית, אלא גם עם סגנון שמרשים בכל מובן!',
      image: 'assets/images/testimonials/itay1.png'
    },
    {
      name: 'דביר ענבי',
      role: 'מהנדס תוכנה',
      content: 'העבודה עם דניאל עמוס היא חוויה מקצועית יוצאת דופן. היכולת שלו להבין צרכים ולתרגם אותם לפתרונות טכנולוגיים היא מרשימה ביותר',
      image: 'assets/images/testimonials/dvir.png'
    },
    {
      name: 'נתן רקובשצ\'יק',
      role: 'יזם טכנולוגי',
      content: 'דניאל עמוס הוא המאסטר של להפוך רעיונות גדולים למציאות דיגיטלית. עבודה איתו היא תמיד חוויה מעוררת השראה, עם הרבה יצירתיות והומור!',
      image: 'assets/images/testimonials/nat.png'
    },
    {
      name: 'עידו אהרון',
      role: 'ארכיטקט תוכנה',
      content: 'דניאל עמוס הוא מקצוען אמיתי עם ראייה רחבה וחשיבה יצירתית. הפתרונות שהוא מציע תמיד חדשניים ויעילים. תענוג לעבוד איתו!',
      image: 'assets/images/testimonials/ido.png'
    },
    {
      name: 'תהילה נעים',
      role: 'מנהלת גיוסים',
      content: 'דניאל עמוס הוא שילוב מושלם של יצירתיות, מקצועיות והומור. כל פרויקט שהוא נוגע בו הופך ליצירת אומנות דיגיטלית עם קריצה שמרגישה כאילו המציא את הגלגל מחדש!',
      image: 'assets/images/testimonials/tehila.png'
    }
  ];

  faqs = [
    {
      question: 'איך מתחילים?',
      answer: 'פשוט נרשמים , מתחברים , ואת החיים בקלות מתחילים'
    },
    {
      question: 'כמה זמן לוקח ביצוע המשימות הדרושות?',
      answer: 'משך הביצוע תלוי בדרישות הספציפיות של המשימה אך בדרך כלל הביצוע יהיה מיידי ונגיש'
    },
    {
      question: 'האם יש תמיכה?',
      answer: 'כן, אנחנו מספקים תמיכה 24/7 לכל הלקוחות שלנו'
    }
  ];

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}
