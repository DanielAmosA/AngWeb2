import { FormControl } from "@angular/forms";

export interface ISignUpForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  idNumber: FormControl<string | null>;
  password: FormControl<string | null>;
}
