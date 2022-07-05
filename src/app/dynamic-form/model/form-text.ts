import { FormInputBase } from './form-input-base';

export class FormText extends FormInputBase<string> {
  override controlType = 'text';
}
