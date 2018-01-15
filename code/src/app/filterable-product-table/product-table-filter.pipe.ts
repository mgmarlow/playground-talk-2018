import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.service';
import { Filter } from './search-bar/search-bar.component';

@Pipe({
  name: 'productTableFilter'
})
export class ProductTableFilterPipe implements PipeTransform {

  transform(products: Product[], filter: Filter): any {
    return products.filter(product => {
      return product.name.toLowerCase().includes(filter.searchText.toLowerCase())
              && (filter.showStockedOnly ? product.stocked : true);
    });
  }

}
