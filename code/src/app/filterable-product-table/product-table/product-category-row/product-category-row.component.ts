import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-product-category-row]',
  template: `
    <th colSpan="2">{{category}}</th>
  `
})
export class ProductCategoryRowComponent {
  @Input() category: string;
}
