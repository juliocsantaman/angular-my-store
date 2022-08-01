import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/services/products-service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  limit: number = 10;
  offset: number = 0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // this.shoppingCart = this.storeService.getShoppingCart();
    // this.total = this.storeService.getTotal();
    this.productsService.getAllProducts(this.limit, this.offset).subscribe((productsApi: Product[]) => {
      this.products = productsApi;
    });
  }

  loadMore(): void {
    this.offset += this.limit;
    this.productsService.getAllProducts(this.limit, this.offset).subscribe((productsApi: Product[]) => {
      this.products = this.products.concat(productsApi);

    });
  }

}
