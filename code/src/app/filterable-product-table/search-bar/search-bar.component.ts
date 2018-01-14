import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <input (keyup)="onChange($event.target.value)" />
    <label>
      <input type="checkbox" />
      Only show products in stock
    </label>
  `,
  styles: []
})
export class SearchBarComponent implements OnInit {
  @Output() updateSearchText = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(searchText: string) {
    this.updateSearchText.emit(searchText);
  }

}
