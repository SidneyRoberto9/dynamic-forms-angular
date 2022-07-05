import { FormInputBase } from './form-input-base';

export class FormSelect extends FormInputBase<string> {
  override controlType = 'select';
}
