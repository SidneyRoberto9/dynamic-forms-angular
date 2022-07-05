import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInputBase } from '../model/form-input-base';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() field: FormInputBase<string | boolean>;
  @Input() form: FormGroup;

  hasFieldError(): boolean {
    return (
      this.form.get(this.field.key).invalid &&
      (this.form.get(this.field.key).dirty ||
        this.form.get(this.field.key).touched)
    );
  }

  isErrorType(errorType: string): boolean {
    return this.form.get(this.field.key).hasError(errorType);
  }

  isRequiredOne(): boolean {
    return this.form.get(this.field.key).hasError('requireOne');

    // this.form.get(this.field.key)?.errors['requiredOne']
  }
}
