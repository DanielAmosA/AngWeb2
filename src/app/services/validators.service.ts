import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { calculateIDChecksum } from '../shared/utils/formValidators.helper';


@Injectable({
  providedIn: 'root'
})

// Functions for Form Validations

export class ValidatorsService {

   // Name Validation
   nameValidator(control: AbstractControl) {
    const name = control.value;

     // Check if the name is empty
     if (!name) {
      return null;
    }

    // Ensure there are no leading or trailing spaces, and no consecutive spaces.
    const namePattern = /^[a-zA-Zא-ת]+([ ]+[a-zA-Zא-ת]+)*$/;


    // Name Length Validation
    if (name && (name.length < 2 || name.length > 30)) {
      return { invalidNameLength: true };
    }
  // Check if the name starts or ends with a space
  if (name && (name.startsWith(' ') || name.endsWith(' '))) {
    return { invalidNameSpace: true };
  }

      // Valid Name Check
      if (name && !namePattern.test(name)) {
        return { invalidName: true };
      }

    return null;
  }

   // Email Validation
  emailValidator(control: AbstractControl) {
    const email = control.value;

    // Check if the email is empty
    if (!email) {
      return null;
    }

    // Regular Expression (Regex) for validating an email address.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Valid Email Check
    if (email && !emailPattern.test(email)) {
      return { invalidEmail: true };
    }

    return null;
  }

  // Phone Validation
  phoneValidator = (control: AbstractControl) => {
    const phone = control.value;

    // Check if the phone is empty
    if (!phone) {
      return null;
    }

    // Valid Prefixes
    const israeliPrefixes = ['05']; // Israeli Prefixes
    const intlPrefixes = ['+972', '+1', '+44', '+49', '+33']; // International Prefixes

    // Format Validation - Digits Only and + at the Beginning
    const validFormat = /^\+?\d+$/.test(phone);
    if (!validFormat) {
      return { invalidPhoneFormat: true };
    }

    // Israeli Number Validation
    const isIsraeliPhone = israeliPrefixes.some(prefix => phone.startsWith(prefix));
    if (isIsraeliPhone) {
      if (phone.length !== 10) {
        return { invalidIsraeliPhoneLength: true };
      }
      return null;
    }

    // International Number Validation
    const isIntlPhone = intlPrefixes.some(prefix => phone.startsWith(prefix));
    if (!isIntlPhone) {
      return { invalidPhonePrefix: true };
    }

    // Length Validation for International Numbers
    if (phone.length < 8 || phone.length > 15) {
      return { invalidPhoneLength: true };
    }

    return null;
   }


  // ID Card Validation
  idValidator(control: AbstractControl) {

    // ID Card must be 9 digits long
    const id = control.value;
    if (id.length !== 9)
    {
      return { invalidIDLength: true };
    }

    // ID Card can contain digits only
    const isNumeric = /^\d{9}$/.test(id);
    if (!isNumeric) {
      return { invalidIDFormatNumeric: true };
    }

    // If the total sum is divisible by 10, the ID is valid.
    const sum = calculateIDChecksum(id);
    if (sum % 10 !== 0) {
      return { invalidIDFormatSum: true };
    }

    return null;
  }

  // Future Date Validation
  futureDateValidator(control: AbstractControl) {
    // Check if the provided date is greater than the current date
    if (control.value && new Date(control.value) > new Date()) {
      return { futureDate: true };
    }
    return null;
  }

  // Past Date Validation
  pastDateValidator(control: AbstractControl) {
    // Check if the provided date is less than the current date
    if (control.value && new Date(control.value) < new Date()) {
      return { pastDate: true };
    }
    return null;
  }



   // Password ( Strength ) Validation
   passwordStrengthValidator(control: AbstractControl) {
    const password = control.value;

    // Error array for password strength
    const errors: { [key: string]: boolean } = {};

    if (password) {
      // The password is of the appropriate length
      if (password.length < 8 || password.length > 20) {
        errors['passwordLength'] = true;
      }

      // The password contains a lowercase letter
      if (!/[a-z]/.test(password)) {
        errors['passwordLowerCase'] = true;
      }

      // The password contains an uppercase letter
      if (!/[A-Z]/.test(password)) {
        errors['passwordUpperCase'] = true;
      }

      // The password contains a digit
      if (!/\d/.test(password)) {
        errors['passwordDigit'] = true;
      }

      // The password contains a special character
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors['passwordSpecialChar'] = true;
      }

      // The password does not contain spaces
      if (/\s/.test(password)) {
        errors['passwordWhitespace'] = true;
      }
    }

    // If there are errors, return an array with the errors
    return Object.keys(errors).length ? errors : null;
  }

   // Password ( Match ) Validation
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    // Check if the confirmation password matches the password in the form
    if (control.value !== control.parent?.get('password')?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
