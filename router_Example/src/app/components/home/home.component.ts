import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `Home`,
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    var d: Params = activatedRoute.snapshot.params["cocojambo"]
    console.log("cocojambo", d);

    var d2 = activatedRoute.snapshot.paramMap.has("cocojambo")
    console.log("cocojambo", d2);
    
    var d3 = activatedRoute.snapshot.paramMap.get("cocojambo")
    console.log("cocojambo", d3);
    
    // activatedRoute.paramMap.subscribe({
    //   next: parameter => {
    //     console.log(parameter.get("cocojambo"));
    //   }
    // })

    // activatedRoute.params.subscribe({
    //   next: parameter => {
    //     console.log(parameter["cocojambo"]);
    //   }
    // })
  }
}
