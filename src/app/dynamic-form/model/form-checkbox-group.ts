import { FormInputBase } from './form-input-base';

export class FormCheckboxGroup extends FormInputBase<string> {
  override controlType = 'checkboxGroup';
}
