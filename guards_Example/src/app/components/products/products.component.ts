import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  template:`Products <br>
  <router-outlet></router-outlet>
  <br>
  <ul>
    <li *ngFor="let photo of photos">
      <a routerLink="[photo.id]">{{photo.url}} </a>
    </li>
  </ul>
  `
})
export class ProductsComponent implements OnInit{
  
  //constructor(private httpClient: HttpClient) { }
  constructor(private activatedRoute: ActivatedRoute) { }
  photos: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any) => this.photos = data["photos"])
  }
}
