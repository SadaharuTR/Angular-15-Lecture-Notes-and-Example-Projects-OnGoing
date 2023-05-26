import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb2',
  template: `
  <p>Child B 2 Component --- {{data}}</p>
  `,

})
export class Childb2Component {
  @Input() data: string;
}
