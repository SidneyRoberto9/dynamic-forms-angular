import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormInputBase } from './model/form-input-base';
import { requiredOne } from './util/requiredOne.validator';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];

  form!: FormGroup;

  ngOnInit(): void {
    this.toFormGroup();
  }

  hasFormUnsavedChanges(): boolean {
    return this.form && this.form.dirty;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    console.log(this.form.value);
  }

  private toFormGroup(): void {
    const group: any = {};

    this.formFields?.forEach((field) => {
      group[field.key] = new FormControl(field.value || '', field.validators);

      if (field.required) {
        group[field.key] = new FormControl(field.value || '', [
          ...field.validators,
          Validators.required,
        ]);
      }

      if (field.group) {
        if (field.required) {
          let arr = {};
          field.options.forEach((option) => {
            arr[option.key] = new FormControl(false, [...field.validators]);
          });
          group[field.key] = new FormGroup(arr, requiredOne());
        } else {
          let arr = {};
          field.options.forEach((option) => {
            arr[option.key] = new FormControl(false, [...field.validators]);
          });
          group[field.key] = new FormGroup(arr);
        }
      }
    });
    this.form = new FormGroup(group);
  }
}
