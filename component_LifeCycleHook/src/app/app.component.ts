import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-example data="merhaba">ngContent İçeriği</app-example>
  `,
})
export class AppComponent {
  title = 'component_LifeCycleHook';
}
