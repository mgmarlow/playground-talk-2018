import { Component } from '@angular/core';
import { PartialObserver } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Filter } from './search-bar/search-bar.component';

@Component({
  selector: 'app-filterable-product-table',
  template: `
    <app-search-bar (filterChange)="onFilterChange($event)"></app-search-bar>
    <app-product-table [filter]="filter"></app-product-table>
  `,
  styles: []
})
export class FilterableProductTableComponent {
  filter = new Filter();

  onFilterChange(filter: Filter) {
    this.filter = filter;
  }

}
