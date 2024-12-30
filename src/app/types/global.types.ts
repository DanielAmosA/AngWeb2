export type TKindLoad = 'Wait' | 'Error' | 'Success'
export type TDialogButtons = 'YesNo' | 'Ok'
export type TType = 'Error' | 'Warning' |'Success'

export type TErrors = typeof ValidationErrorTypes[number];

export const ValidationErrorTypes = [
  'required',
  'minlength',
  'pattern',
  'email',
  'invalidCheckDigit',
  'invalidLength'
] as const;
