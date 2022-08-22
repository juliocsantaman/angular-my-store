import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    })
  }

  deleteProduct(id: string) {
    this.productsService.delete(id).subscribe((response) => {
      console.log(response);
      this.fetchProducts();
    });
  }

}
