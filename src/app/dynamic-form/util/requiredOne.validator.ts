import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function requiredOne(minRequired = 1): ValidatorFn {
  return function validate(formGroup: FormGroup): ValidationErrors | null {
    let checked = 0;

    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked++;
      }
    });

    if (checked < minRequired) {
      return {
        requireOne: true,
      };
    }

    return null;
  };
}
