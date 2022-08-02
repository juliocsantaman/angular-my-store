import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  limit: number = 10;
  offset: number = 0;
  productId: string | null = '';

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.shoppingCart = this.storeService.getShoppingCart();
    // this.total = this.storeService.getTotal();
    this.productsService.getAllProducts(this.limit, this.offset).subscribe((productsApi: Product[]) => {
      this.products = productsApi;
    });

    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      this.productId = queryParams.get('product');
      //console.log(this.productId);
    });
  }

  loadMore(): void {
    this.offset += this.limit;
    this.productsService.getAllProducts(this.limit, this.offset).subscribe((productsApi: Product[]) => {
      this.products = this.products.concat(productsApi);

    });
  }

}
