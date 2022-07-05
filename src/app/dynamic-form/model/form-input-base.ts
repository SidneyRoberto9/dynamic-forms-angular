import { ValidatorFn } from '@angular/forms';

export class FormInputBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: optionsProps[];
  validators: ValidatorFn[] | null;
  readonly: boolean;
  description?: string;
  group?: boolean;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: optionsProps[];
      validators?: ValidatorFn[] | null;
      readonly?: boolean;
      description?: string;
      group?: boolean;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
    this.description = options.description || '';
    this.group = !!options.group;
  }
}

export interface optionsProps {
  key: string;
  value: string;
}
