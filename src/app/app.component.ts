import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

import { FormCheckbox } from './dynamic-form/model/form-checkbox';
import { FormCheckboxGroup } from './dynamic-form/model/form-checkbox-group';
import { FormInputBase } from './dynamic-form/model/form-input-base';
import { FormSelect } from './dynamic-form/model/form-select';
import { FormText } from './dynamic-form/model/form-text';
import { FormTextArea } from './dynamic-form/model/form-textare';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm: FormInputBase<string | boolean>[] = [
    new FormText({
      key: 'em',
      label: 'Email',
      required: true,
      validators: [Validators.email],
    }),

    new FormText({
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      validators: [Validators.minLength(2), Validators.maxLength(10)],
    }),

    new FormSelect({
      key: 'animal',
      label: 'Favorite animal',
      options: [
        { key: 'cat', value: 'Cat' },
        { key: 'dog', value: 'Dog' },
      ],
      required: true,
    }),

    new FormCheckbox({
      key: 'readAgreement',
      label: 'Read agreement?',
      required: true,
    }),

    new FormCheckboxGroup({
      key: 'items',
      label: 'Items',
      options: [
        { key: 'cat', value: 'Cat' },
        { key: 'dog', value: 'Dog' },
        { key: 'wold', value: 'Wolf' },
        { key: 'horse', value: 'Horse' },
      ],
      group: true,
      required: true,
    }),

    new FormTextArea({
      key: 'description',
      label: 'Descrição',
      required: true,
    }),

    new FormText({
      key: 'title',
      label: 'Title',
      type: 'text',
      required: true,
      validators: [Validators.pattern(/^\d+$/)],
    }),
  ];
}
