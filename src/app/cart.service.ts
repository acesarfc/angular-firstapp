import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(
     private http: HttpClient
     ) { }

  /* appends a product to an array of items*/ 
  addToCart(product: Product){
    this.items.push(product);
  }

  /** collects the items users add to the cart and returns */
  getItems(){
    return this.items;
  }
/** returns an empty array of items, which empties the cart */
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

}
