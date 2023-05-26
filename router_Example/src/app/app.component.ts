import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="home" routerLinkActive="active">Home</a> | 
    <a routerLink="about" routerLinkActive="active">About</a> | 
  
    <!-- <a routerLink="contact/a/b/c">Contact</a> -->
    <a [routerLink]="['contact', 'a', 'b', 'c']" routerLinkActive="active">Contact</a>
    <br>
    <hr>
    <router-outlet></router-outlet>
    <br>
    <button (click)="go()">Go</button>
  `,
  styles: [".active{color: green;}"]
})
export class AppComponent{

  go() {
    history.pushState({message:"Merhaba"}, "title", "a/b")
    }
}
