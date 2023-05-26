import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <a routerLink="home">Home</a> | <a routerLink="dashboard">Dashboard</a> | <a routerLink="about">About</a> | <a routerLink="products">Products</a> <br>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'guards_Example';
}
