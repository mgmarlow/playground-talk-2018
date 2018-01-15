import { Component } from '@angular/core';
import { sandboxOf } from 'angular-playground';
import { SearchBarComponent, Filter } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

// Declare a parent component to house the search bar
@Component({
  selector: 'search-host',
  template: `
    <app-search-bar (filterChange)="onFilterChange($event)"></app-search-bar>
    <p>Searching on: {{ search }}</p>
    <p>Show out of stock products? {{ showStockedOnly ? 'No' : 'Yes' }}</p>
  `
})
export class SearchHostComponent {
  search: string;
  showStockedOnly: boolean;

  onFilterChange(filter: Filter) {
    this.search = filter.searchText;
    this.showStockedOnly = filter.showStockedOnly;
  }
}

// Sandbox host component, add dependency on search bar as declaration
// Now the search bar can be sandboxed in the context of a parent component
export default sandboxOf(SearchHostComponent, {
  imports: [ ReactiveFormsModule ],
  declarations: [ SearchBarComponent ]
})
  .add('Default', {
    template: `<search-host></search-host>`
  });
