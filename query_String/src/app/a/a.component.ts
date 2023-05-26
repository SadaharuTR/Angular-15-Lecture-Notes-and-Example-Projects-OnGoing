import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a',
  template:`zart`
})
export class AComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next : queryStringParam => console.log(queryStringParam.get("x"))
    })
  }
}
