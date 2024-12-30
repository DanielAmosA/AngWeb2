import { IValidationMessages } from "./IValidationMessages.interface";

export const signUpErrorMessages: IValidationMessages = {
  firstName: {
    required: 'שם פרטי הוא שדה חובה',
    minlength: 'שם פרטי חייב להכיל לפחות 2 תווים',
    pattern: 'שם פרטי יכול להכיל רק אותיות'
  },
  lastName: {
    required: 'שם משפחה הוא שדה חובה',
    minlength: 'שם משפחה חייב להכיל לפחות 2 תווים',
    pattern: 'שם משפחה יכול להכיל רק אותיות'
  },
  email: {
    required: 'אימייל הוא שדה חובה',
    email: 'אנא הזן כתובת אימייל תקינה',
    pattern: 'אנא הזן כתובת אימייל תקינה'
  },
  phone: {
    required: 'מספר טלפון הוא שדה חובה',
    pattern: 'אנא הזן מספר טלפון תקין (05X-XXXXXXXX)'
  },
  idNumber: {
    required: 'תעודת זהות היא שדה חובה',
    pattern: 'תעודת זהות חייבת להכיל 9 ספרות',
    invalidLength: 'תעודת זהות חייבת להכיל 9 ספרות',
    invalidCheckDigit: 'תעודת זהות לא תקינה'
  },
  password: {
    required: 'סיסמה היא שדה חובה',
    minlength: 'סיסמה חייבת להיות באורך של 8 עד 20 תווים',
    pattern: 'הסיסמה חייבת להכיל אות גדולה באנגלית, אות קטנה באנגלית, מספר ותו מיוחד'
  }
};
