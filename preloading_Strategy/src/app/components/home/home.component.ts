import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template:`
  {{100 | currency}}

  <div *ngIf="0">Merhaba</div>
  `,
  imports: [CommonModule]
  //imports: [NgIf, NgFor, CurrencyPipe]
})
export class HomeComponent {

}
