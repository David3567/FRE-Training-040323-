import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  // ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  // Assignment 1
  // 1.1Create a component called reactive(addreess-form) component and use it in app component
  // 1.2Add name, email fields and add a submit button
  // 1.3On submit button, send the data back to the app parent component using output() and show it in the UI
  // Assignment 2
  // Pass the form data to reactive(addreess-form) component using input() and display it in the form
  // Make all the form fields required, and disable submit button if the form is invalid
  @Output() emitOnSubmit = new EventEmitter<Object>();
  @Input() formData!: any;

  form!: FormGroup;

  requiredValue!: number;

  constructor(private fb: FormBuilder) {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get pwd() {
    return this.form.get('pwd');
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, this.gte(3)]],
      // email: ['', [Validators.required]],
      pwd: this.fb.group(
        {
          passwd: '',
          confirm: '',
        },
        {
          validator: this.passwordNoMatch,
        }
      ),
    });

    this.name?.valueChanges.subscribe(val=> console.log(val))

    // this.form = new FormGroup({
    //   name: new FormControl(this.formData.name),
    //   email: new FormControl(this.formData.email),
    // })
  }

  // twoWordsValidator: ValidatorFn = (
  //   control: AbstractControl
  // ): ValidationErrors | null => {
  //   const name = control.value;
  //   const words = name.trim().split(' ');
  //   const isValid = words.length >= 2;
  //   return isValid ? null : { twoWordsValidator: true };
  // };

  gte(val: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;
      const words = name.trim().split(' ');
      const isValid = words.length >= val;
      return isValid ? null : { gte: true, requiredValue: val };
    };
  }

  passwordNoMatch: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const pwdVal = group.get('passwd')?.value;
    const cofVal = group.get('confirm')?.value;

    return (pwdVal === cofVal) ? null : { passwordNoMatch: true };
  };

  onSumbit() {
    this.emitOnSubmit.emit({
      name: this.form.value.name,
      email: this.form.value.email,
    });
    // console.log(this.form.value);
  }
}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}
