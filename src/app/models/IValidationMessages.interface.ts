export interface IValidationMessages {
  [key: string]: {
    required?: string;
    minlength?: string;
    pattern?: string;
    email?: string;
    invalidCheckDigit?: string;
    invalidLength?: string;
  }
}
