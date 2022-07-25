import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addedProduct(product: Product): void {
    this.shoppingCart.push(product);
    this.myCart.next(this.shoppingCart);
  }

  getShoppingCart(): Product[] {
    return this.shoppingCart;
  }

  getTotal(): number {
    let total = this.shoppingCart.reduce((add, product) => add + product.price, 0);
    //this.myCart.next(this.shoppingCart);
    return total;
  }

  deleteProduct(productIndex: number): void {
    this.shoppingCart.splice(productIndex, 1);
    this.myCart.next(this.shoppingCart);
  }

}
