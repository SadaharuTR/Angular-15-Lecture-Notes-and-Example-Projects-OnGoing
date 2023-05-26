import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-b',
  template: `
    BComponent => {{randomService?.random}} <br>
  `,
  //providers: [] 
})
export class BComponent {
  constructor(public randomService: RandomService){
  }
}
