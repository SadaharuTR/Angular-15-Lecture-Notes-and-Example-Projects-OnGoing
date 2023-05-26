import {Component, OnInit} from '@angular/core'
import {
  Router,
  Event,
  NavigationStart,
  RoutesRecognized,
  GuardsCheckStart,
  ChildActivationStart,
  ActivationStart,
  GuardsCheckEnd,
  ResolveEnd,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Scroll,
  ResolveStart,
  ActivationEnd
} from '@angular/router';

@Component({
  selector: 'app-router-event-deneme',
  template: ``
})
export class RouterEventDenemeComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart)
        console.log(`'NavigationStart': ${event}`);
      else if (event instanceof RoutesRecognized)
        console.log(`'RoutesRecognized': ${event}`);
      else if (event instanceof GuardsCheckStart)
        console.log(`'GuardsCheckStart': ${event}`);
      else if (event instanceof ChildActivationStart)
        console.log(`'ChildActivationStart': ${event}`);
      else if (event instanceof ActivationStart)
        console.log(`'ActivationStart': ${event}`);
      else if (event instanceof GuardsCheckEnd)
        console.log(`'GuardsCheckEnd': ${event}`);
      else if (event instanceof ResolveStart)
        console.log(`'ResolveStart': ${event}`);
      else if (event instanceof ActivationEnd)
        console.log(`'ActivationEnd': ${event}`);
      else if (event instanceof ResolveEnd)
        console.log(`'ResolveEnd': ${event}`);
      else if (event instanceof NavigationEnd)
        console.log(`'NavigationEnd': ${event}`);
      else if (event instanceof NavigationCancel)
        console.log(`'NavigationCancel': ${event}`);
      else if (event instanceof NavigationError)
        console.log(`'NavigationError': ${event}`);
      else if (event instanceof Scroll)
        console.log(`'Scroll': ${event}`);
    })
  }
}
