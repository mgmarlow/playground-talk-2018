import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService, Product } from '../product.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Filter } from '../search-bar/search-bar.component';

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
          <ng-container *ngFor="let product of (allProducts | productTableFilter:filter)">
            <tr app-product-row *ngIf="product.category === category" [product]="product"></tr>
          </ng-container>
        </ng-container>
      </tbody>
    </table>
  `,
  styles: []
})
export class ProductTableComponent implements OnInit, OnChanges {
  @Input() filter: Filter;
  categories: string[] = [];

  private allProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getRows()
      .subscribe(rows => {
        this.allProducts = rows;
        this.categories = this.getCategories(this.filter);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.categories = this.getCategories(changes.filter.currentValue);
  }


  private getCategories(filter: Filter): string[] {
    const categories = [];
      
    this.allProducts.forEach(product => {
      if (!categories.includes(product.category)) {
        categories.push(product.category)
      }
    });

    return categories;
  }

}
