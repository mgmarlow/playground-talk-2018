import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { FilterableProductTableComponent } from './filterable-product-table.component';
import { ProductRowComponent } from './product-table/product-row/product-row.component';
import { ProductCategoryRowComponent } from './product-table/product-category-row/product-category-row.component';
import { ProductService } from './product.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FilterableProductTableComponent,
    SearchBarComponent,
    ProductTableComponent,
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  exports: [
    FilterableProductTableComponent
  ],
  providers: [
    ProductService
  ]
})
export class FilterableProductTableModule {

}
