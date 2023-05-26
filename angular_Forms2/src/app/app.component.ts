import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()"> 
    <input type="text" placeholder="Name" formControlName="name"> <br>
    <input type="text" placeholder="Surname" formControlName="surname"> <br>
    <input type="text" placeholder="Email" formControlName="email"> <br>
    <input type="text" placeholder="Tel" formControlName="tel"> <br> <br>
    <div formGroupName="address">
      <input type="text" placeholder="Country" formControlName="country"> <br>
      <input type="text" placeholder="City" formControlName="city"> <br>
      <input type="text" placeholder="Address" formControlName="address">
    </div>
    <button>Send</button>
  </form>

  <button (click)="markAsTouchedFunc()">markAsTouched</button> <br>
  <button (click)="markAllAsTouchedFunc()">markAllAsTouched</button> <br>
  <button (click)="markAsUntouchedFunc()">markAsUntouched</button> <br>
  <button (click)="markAsDirtyFunc()">markAsDirty</button> <br>
  <button (click)="markAsPristineFunc()">markAsPristine</button> <br>
  <button (click)="disableFunc()">disable</button> <br>
  <button (click)="enableFunc()">enable</button> <br>

  form touched: {{frm.touched}} <br>
  'name' form control touched : {{frm.get("name").touched}} <br>
  'address' form control touched : {{frm.get("address").touched}} <br>
  'country' form control touched : {{frm.get("address").get("country").touched}}
  <hr>
  form dirty: {{frm.dirty}} <br>
  'name' form control dirty : {{frm.get("name").dirty}}
  <hr>
  form pristine: {{frm.pristine}} <br>
  'name' form control pristine : {{frm.get("name").pristine}}
  <hr>
  `,
})
export class AppComponent {

  frm: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.frm = formBuilder.group({
      name:["", Validators.required],
      surname:[""],
      email:[""],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    })

  this.frm.valueChanges.subscribe({
    next: data => {
      console.log(data);
    }
  })

  this.frm.statusChanges.subscribe({
    next: data => {
      console.log(data);
    }
  })
  }

  onSubmit(){
    console.log(this.frm.value)
  }

  markAsTouchedFunc() {
    //this.frm.markAsTouched()
    //this.frm.get("name").markAsTouched()
    this.frm.get("name").markAsTouched({onlySelf: true})
  }
  markAllAsTouchedFunc() {
    //this.frm.markAllAsTouched();
    this.frm.get("address").markAllAsTouched();
  }
  markAsUntouchedFunc() {
    this.frm.markAsUntouched();
  }
  markAsDirtyFunc() {
    this.frm.markAsDirty();
  }
  markAsPristineFunc(){
    this.frm.markAsPristine();
  }
  disableFunc() {
    this.frm.get("name").disable()
  }
  enableFunc() {
    this.frm.get("name").enable()
  }

}
