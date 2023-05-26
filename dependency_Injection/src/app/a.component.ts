import { Component, Self } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-a',
  template: `
    AComponent => {{randomService.random}} <br>
    <app-b></app-b>
  
  `,
  viewProviders: [RandomService]
  //providers: [RandomService]
})
export class AComponent {
  constructor(public randomService: RandomService){

  }
}
