import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle, } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IDialogData } from '../../../models/IDialogData.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule,
     MatDialogContent,MatDialogTitle,MatDialogActions,
     MatIconModule,
     MatButton],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {}

  close(choice?: string): void {
    this.dialogRef.close(choice || 'ok');
  }

}
