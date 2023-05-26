import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <p>Child Component</p>
  `
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({message: "Merhaba Televole"})
  }
  @Output() dataEvent : EventEmitter<any> = new EventEmitter();
}
