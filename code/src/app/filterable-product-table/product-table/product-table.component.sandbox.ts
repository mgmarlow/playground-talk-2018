import { ProductTableComponent } from './product-table.component';
import { ProductService, Product } from '../product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { sandboxOf } from 'angular-playground';
import { ProductCategoryRowComponent } from './product-category-row/product-category-row.component';
import { ProductRowComponent } from './product-row/product-row.component';

// Mock providers and provide them directly to scenarios in a sandbox
class MockProductService {
  getRows(): Observable<Product[]> {
    return Observable.of([
      { category: 'Climbing', name: 'Climbing shoes', price: '$125.00', stocked: true },
      { category: 'Climbing', name: 'Chalk', price: '$12.00', stocked: false }
    ]);
  }
}

export default sandboxOf(ProductTableComponent, {
  declarations: [
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  providers: [
    { provide: ProductService, useClass: MockProductService }
  ]
})
  .add('No Filter', {
    template: `<app-product-table [filter]="filter"></app-product-table>`,
    context: {
      filter: {
        searchText: '',
        showStockedOnly: false
      }
    }
  })
  .add('Only Show Stocked', {
    template: `<app-product-table [filter]="filter"></app-product-table>`,
    context: {
      filter: {
        searchText: '',
        showStockedOnly: true
      }
    }
  });
