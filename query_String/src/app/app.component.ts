import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="a" [queryParams]="{x : 3}">a</a> & <a routerLink="b" [queryParams]="bQueryStrint" queryParamsHandling="merge">b</a> <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  //b'ye de component class'ında tanımlayalım.
  bQueryStrint: any = {
    meyve: "muz",
    sebze: "patlican" //birden fazla da verilebilir.
  }
}
