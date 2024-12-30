import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule,
    MatDialogContent, MatError, MatLabel, MatFormField,MatDialogActions
  ],
  templateUrl: './employee-dialog.component.html',
  styleUrl: './employee-dialog.component.scss'
})
export class EmployeeDialogComponent {

  employeeForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // מקבלים את הנתונים שהועברו לדיאלוג
    private fb: FormBuilder
  ) {
    // יצירת הטופס עם השדות
    this.employeeForm = this.fb.group({
      fullName: [this.data.fullName || '', Validators.required],
      phone: [this.data.phone || '', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [this.data.email || '', [Validators.required, Validators.email]]
    });
  }

  // עדכון פרטי העובד
  updateEmployee() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value); // כאן תוכל לשלוח את הנתונים לשרת או לשמור
    } else {
      console.log('Form is invalid!');
    }
  }
}
