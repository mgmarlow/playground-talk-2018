import { sandboxOf } from 'angular-playground';
import { ProductRowComponent } from './product-row.component';
import { Product } from '../../product.service';

export default sandboxOf(ProductRowComponent)
  // Provide scenario names that are tied to state to quickly switch
  // between all possible states of a component
  .add('Stocked', {
    template: `<tr app-product-row [product]="product"></tr>`,
    context: {
      product: {
        category: 'Climbing',
        name: 'Climbing shoes',
        price: '$125.00',
        stocked: true
      } as Product
    }
  })
  .add('Out of Stock', {
    template: `<tr app-product-row [product]="product"></tr>`,
    context: {
      product: {
        category: 'Climbing',
        name: 'Chalk',
        price: '$12.00',
        stocked: false
      } as Product
    }
  });
