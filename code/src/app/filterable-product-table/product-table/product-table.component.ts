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
        <ng-container *ngFor="let category of categories">
          <tr app-product-category-row [category]="category"></tr>
          <ng-container *ngFor="let product of products">
            <tr app-product-row *ngIf="product.category === category" [product]="product"></tr>
          </ng-container>
        </ng-container>
      </tbody>
    </table>
  `,
  styles: []
})
export class ProductTableComponent implements OnInit {
  @Input() searchText: string;
  categories: string[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    let lastCategory = null;
    this.productService.getRows()
      .subscribe(rows => {
        this.products = rows;
        rows.forEach(product => {
          if (!this.categories.includes(product.category)) {
            this.categories.push(product.category);
          }
        });
      });
  }

}
