import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { StoreService } from 'src/app/services/store-service/store.service';
import { ProductsService } from 'src/app/services/products-service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  shoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [];
  today: Date = new Date();
  date: Date = new Date(2021, 1, 21);

  constructor(private storeService: StoreService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.shoppingCart = this.storeService.getShoppingCart();
    this.productsService.getAllProducts().subscribe((productsApi: Product[]) => {
      this.products = productsApi;
    });
  }

  addedProduct(product: Product): void {
    this.storeService.addedProduct(product);
    this.total = this.storeService.getTotal();
  }

  // calculateTotal(): void {
  //   this.total = 0;
  //   this.shoppingCart.map((product) => {
  //     this.total += product.price;
  //   });
  // }

}
