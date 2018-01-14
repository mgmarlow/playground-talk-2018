import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterable-product-table',
  template: `
    <app-search-bar (updateSearchText)="onSearchChange($event)"></app-search-bar>
    <app-product-table [searchText]="searchText"></app-product-table>
  `,
  styles: []
})
export class FilterableProductTableComponent implements OnInit {
  searchText = '';
  constructor() { }

  ngOnInit() {
  }

  onSearchChange(value: string) {
    this.searchText = value;
  }

}
