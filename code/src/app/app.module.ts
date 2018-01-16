import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterableProductTableModule } from './filterable-product-table/filterable-product-table.module';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  imports: [
    BrowserModule,
    FilterableProductTableModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
