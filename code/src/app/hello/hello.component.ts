import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>Hello {{ name }}</p>
    <button (click)="onClick()">Click</button>
  `
})
export class HelloComponent {
  @Output() buttonClick = new EventEmitter();
  @Input() name: string;

  onClick() {
    this.buttonClick.emit('clicked!');
  }
}
