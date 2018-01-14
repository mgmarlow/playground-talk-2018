import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { FilterableProductTableComponent } from './filterable-product-table/filterable-product-table.component';
import { SearchBarComponent } from './filterable-product-table/search-bar/search-bar.component';
import { ProductTableComponent } from './filterable-product-table/product-table/product-table.component';
import { ProductService } from './product.service';
import { ProductCategoryRowComponent } from './filterable-product-table/product-table/product-category-row/product-category-row.component';
import { ProductRowComponent } from './filterable-product-table/product-table/product-row/product-row.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    FilterableProductTableComponent,
    SearchBarComponent,
    ProductTableComponent,
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
