import { Component, Input } from '@angular/core';
import { TKindLoad } from '../../../types/global.types';
import { CommonModule } from '@angular/common';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-kind-load-data',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,MatCardTitle,MatCardContent,MatProgressSpinnerModule,MatButtonModule
  ],
  templateUrl: './kind-load-data.component.html',
  styleUrl: './kind-load-data.component.scss'
})
export class KindLoadDataComponent {

  @Input() kind: TKindLoad = 'Wait';
  waitMessage: string = 'הנתונים מתחבאים, אבל אנחנו לא מוותרים ואת כולם בפלא מוצאים 🎆 ! 🧙🏻‍♀️';
  waitImg: string = 'assets/images/load.gif';
  errorMessage: string = 'טעינת הנתונים לא הצליחה , אולי הם קפצו לאיזה פסטיגל 🐾 ? 🕺🏼';
  errorImg: string = 'assets/images/noData.gif';
  @Input() successTemplate: any; // Template for successful data
}
