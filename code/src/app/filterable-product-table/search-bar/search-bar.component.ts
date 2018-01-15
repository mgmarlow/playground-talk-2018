import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PartialObserver } from 'rxjs/Observer';

export class Filter {
  constructor(
    public searchText = '',
    public showStockedOnly = false
  ) {}
}

@Component({
  selector: 'app-search-bar',
  template: `
    <form [formGroup]="form">
      <input formControlName="searchText" />
      <label>
        <input formControlName="showStockedOnly" type="checkbox" />
        Only show products in stock
      </label>
    </form>
  `
})
export class SearchBarComponent implements OnInit {
  @Output() filterChange = new EventEmitter();
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      searchText: new FormControl(''),
      showStockedOnly: new FormControl(false)
    });

    this.form.valueChanges
      .subscribe(filter => this.filterChange.emit(filter));
  }
}
