import { sandboxOf } from 'angular-playground';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FilterableProductTableComponent } from './filterable-product-table.component';
import { FilterableProductTableModule } from './filterable-product-table.module';
import { ProductService } from './product.service';
import { ProductCategoryRowComponent } from './product-table/product-category-row/product-category-row.component';

class MockProductService {
  getRows(): Observable<ProductCategoryRowComponent[]> {
    return Observable.of([
      { category: 'Climbing', name: 'Climbing shoes', price: '$125.00', stocked: true },
      { category: 'Climbing', name: 'Chalk', price: '$12.00', stocked: false }
    ]);
  }
}

export default sandboxOf(FilterableProductTableComponent, {
  imports: [ FilterableProductTableModule ],
  providers: [
    { provide: ProductService, useClass: MockProductService }
  ],
  // Since this component is included within the exported module,
  // don't declare it twice
  declareComponent: false
})
  .add('Default', {
    template: `<app-filterable-product-table></app-filterable-product-table>`
  });
