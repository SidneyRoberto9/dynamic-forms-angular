# Dynamic Forms Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

The project aims to facilitate the use of common forms such as select, textArea, standard input, checkbox and checkbox group.

The following are examples for generating a form for each field:

```ts
new FormText({
  key: "em",
  label: "Email",
  required: true,
});

new FormTextArea({
  key: "description",
  label: "Descrição",
  required: true,
});

new FormSelect({
  key: "animal",
  label: "Favorite animal",
  options: [
    { key: "cat", value: "Cat" },
    { key: "dog", value: "Dog" },
  ],
  required: true,
});

new FormCheckbox({
  key: "readAgreement",
  label: "Read agreement?",
  required: true,
});

new FormCheckboxGroup({
  key: "items",
  label: "Items",
  options: [
    { key: "cat", value: "Cat" },
    { key: "dog", value: "Dog" },
    { key: "wold", value: "Wolf" },
    { key: "horse", value: "Horse" },
  ],
  group: true,
  required: true,
});
```

Basically they are Instantiations of their respective classes, their parameter chain comes from the base model, where below we have the parameters that can be inferred in the creation of each class/field:

```ts
class FormInputBase {
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
}
```

In order to actually use this creation, we must first create the fields by instantiating the classes mentioned above and then send them in the html/template of the component where it will be used.

```html
<dynamic-form [formFields]="myForm"></dynamic-form>
```

```ts
  myForm: FormInputBase<string | boolean>[] = [
    new FormText({
      key: 'em',
      label: 'Email',
      required: true,
      validators: [Validators.email],
    }),
  ];
```

For better understanding download the project run the installation commands and learn how it works.

```bash
 yarn
 yarn start
```

or

```bash
 npm install
 npm run start
```

Done with :heart: by <a href="https://github.com/SidneyRoberto9" target="_blank">Sidney Roberto</a>
