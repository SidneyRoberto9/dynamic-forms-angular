import { FormInputBase } from './form-input-base';

export class FormTextArea extends FormInputBase<string> {
  override controlType = 'textArea';
}
