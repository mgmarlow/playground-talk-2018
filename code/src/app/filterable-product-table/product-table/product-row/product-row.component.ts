import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../product.service';

@Component({
  selector: 'tr[app-product-row]',
  template: `
    <tr>
      <td [ngClass]="{ 'red':product.stocked }">{{ product.name }}</td>
      <td>{{ product.price }}</td>
    </tr>
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class ProductRowComponent {
  @Input() product: Product;
}
