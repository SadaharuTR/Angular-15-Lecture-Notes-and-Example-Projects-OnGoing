import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h2>This is AppComponent</h2>
  <a routerLink="home">Home</a> | <a routerLink="products" [state]="{key3:'value3', key4: 'value4'}">Product</a> <br>
  <router-outlet></router-outlet>
  <hr><br>
  <a routerLink="router-event-deneme">Router Event'leri</a>
  `
})
export class AppComponent {
  title = 'router_Outhers';
}
