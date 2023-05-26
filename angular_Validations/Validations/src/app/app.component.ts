import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalLetterValidator } from './customValidators/custom-val';
import { capitalLetterValidatorWithParam } from './customValidators/custom-val-parameter';
import { matchPassword } from './customValidators/password-val';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" formControlName="name" placeholder="Name"> <br>
    <div *ngIf="!name.valid && (name.dirty || name.touched)">
      {{name.errors | json}}
    </div>
    <input type="text" formControlName="surname" placeholder="Surname"> <br>
    <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">
      {{surname.errors | json}}
    </div>
    <input type="password" formControlName="password" placeholder="Password"> <br>
    <div *ngIf="!password.valid && (password.dirty || password.touched)">
      {{password.errors | json}}
    </div>
    <input type="password" formControlName="passwordConfirm" placeholder="Confirm Password"> <br>
    <div *ngIf="!passwordConfirm.valid && (passwordConfirm.dirty || passwordConfirm.touched)">
      {{passwordConfirm.errors | json}}
    </div>
    <div *ngIf="frm.hasError('noMatch')">
      Password's must match!
    </div>
    <input type="text" formControlName="email" placeholder="Email"> <br>
    <div *ngIf="!email.valid && (email.dirty || email.touched)">
      {{email.errors | json}}
    </div>
    <button>Submit</button>
  </form>
  `,
})
export class AppComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, capitalLetterValidatorWithParam(5)]],
      surname: ["", [Validators.required, Validators.minLength(5), capitalLetterValidator]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required]
    }, { validators: [matchPassword()] })
  }

  //üç tane formControl'ü template'de bu kontrollere daha rahat erişebilmek için property olarak 
  //tanımladık.
  get name(){
    return this.frm.get("name")
  }

  get surname(){
    return this.frm.get("surname")
  }

  get email(){
    return this.frm.get("email")
  }

  get password(){
    return this.frm.get("password")
  }

  get passwordConfirm(){
    return this.frm.get("passwordConfirm")
  }

  onSubmit(){
    console.log(this.frm.valid);
    console.log(this.frm.value);    
  }
}
