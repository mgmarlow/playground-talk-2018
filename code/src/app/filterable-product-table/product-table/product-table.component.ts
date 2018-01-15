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
          <ng-container *ngFor="let product of products">
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
  products: Product[] = [];

  private allProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getRows()
      .subscribe(rows => {
        this.allProducts = rows;
        this.applyFilter(this.filter);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyFilter(changes.filter.currentValue);
  }


  private applyFilter(filter: Filter) {
    this.categories = [];
    this.products = this.allProducts
      .filter(product => {
        return product.name.toLowerCase().includes(filter.searchText.toLowerCase())
               && (filter.showStockedOnly ? product.stocked : true);
      });
      
    this.products.forEach(product => {
      if (!this.categories.includes(product.category)) {
        this.categories.push(product.category)
      }
    });
  }

}
