import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { StoreService } from 'src/app/services/store-service/store.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: Product[] = [];
  total: number = 0;
  counter: number = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.total = this.storeService.getTotal();
    this.storeService.myCart$.subscribe((products) => {
      this.shoppingCart = products;
      this.counter = products.length;
    });
  }

  deletedProduct(productIndex: number): void {
    this.storeService.deleteProduct(productIndex);
    this.total = this.storeService.getTotal();
  }

}
