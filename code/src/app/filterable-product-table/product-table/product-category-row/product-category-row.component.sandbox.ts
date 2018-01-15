import { sandboxOf } from "angular-playground";
import { ProductCategoryRowComponent } from "./product-category-row.component";

export default sandboxOf(ProductCategoryRowComponent)
  .add('Default', {
    template: `<tr app-product-category-row [category]="category"></tr>`,
    context: {
      category: 'Products'
    }
  })
  .add('King Gizzard and the Lizard Wizard Albums', {
    template: `
      <table>
      <tbody>
        <tr app-product-category-row [category]="category"></tr>
        <tr><td>Flying Microtonal Banana</td></tr>
        <tr><td>Nonagon Infinity</td></tr>
        <tr><td>Polygondwanaland</td></tr>
      </tbody>
      </table>
    `,
    context: {
      category: 'Music'
    }
  });
