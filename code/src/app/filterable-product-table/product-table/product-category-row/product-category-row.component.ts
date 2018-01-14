import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-product-category-row]',
  template: `
    <tr>
      <th colSpan="2">{{category}}</th>
    </tr>
  `,
  styles: []
})
export class ProductCategoryRowComponent {
  @Input() category: string;
}
