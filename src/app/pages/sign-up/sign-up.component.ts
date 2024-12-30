import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule],

    // Custom date styling
    providers: [
      {
        provide: DateAdapter,
        useClass: NativeDateAdapter,
      },
      {
        provide: MAT_DATE_LOCALE,
        useValue: 'he-IL',
      },
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  hidePassword = true;
  today: string = new Date().toISOString().split('T')[0];

  formErrors: string = '';

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService) {}

  ngOnInit() {

    //Form initialization
    this.registerForm = this.fb.group({

      //Adding validations to fields
      name: [
        '',
        [Validators.required, this.validatorsService.nameValidator]
      ],
      email: [
        '',
        [Validators.required, this.validatorsService.emailValidator]
      ],
      phone: [
        '',
        [Validators.required, this.validatorsService.phoneValidator]
      ],
      idNumber: [
        '',
        [Validators.required, this.validatorsService.idValidator]
      ],
      dob: [
        '',
        [Validators.required, this.validatorsService.futureDateValidator]
      ],
      password: [
        '',
        [Validators.required, this.validatorsService.passwordStrengthValidator]
      ],
      confirmPassword: [
        '',
        [Validators.required, this.validatorsService.passwordMatchValidator.bind(this)]
      ],
    });

      // We will track every change in the form and convert all errors into JSON format.
      this.registerForm.valueChanges.subscribe(() => {
        this.formErrors = JSON.stringify(this.getFormErrors(), null, 2); // Conversion to a nicely formatted JSON
      });

  }

  // Form error display
  getFormErrors() {
    const errors: { [key: string]: any } = {};
    Object.keys(this.registerForm.controls).forEach(field => {
      const control = this.registerForm.get(field);
      if (control && control.errors) {
        errors[field] = control.errors;
      }
    });
    return errors;
  }

  // Password show/hide toggle
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  // Logic for form submission
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
