import { Component } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-root',
  template: `
  AppComponent => {{randomService.random}} <br>
  <app-a></app-a>
  `,
  

})
export class AppComponent {

  constructor(public randomService: RandomService){

  }
}
