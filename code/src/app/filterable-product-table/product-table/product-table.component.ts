import { Component, OnInit, Input } from '@angular/core';
import { ProductService, Product } from '../../product.service';

@Component({
  selector: 'app-product-table',
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <div *ngFor="let product of products">          
          <app-product-category-row [category]="product.category"></app-product-category-row>
          <app-product-row [product]="product"></app-product-row>
        </div>
      </tbody>
    </table>
  `,
  styles: []
})
export class ProductTableComponent implements OnInit {
  @Input() searchText: string;
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    let lastCategory = null;
    this.productService.getRows()
      .subscribe(rows => this.products = rows);
  }

}
