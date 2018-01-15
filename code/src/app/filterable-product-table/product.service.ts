import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Product {
  name: string;
  stocked: boolean;
  price: string;
  category: string;
}

@Injectable()
export class ProductService {

  getRows(): Observable<Product[]> {
    return Observable.of([
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]);
  }

}
