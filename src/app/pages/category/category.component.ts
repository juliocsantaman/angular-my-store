import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { Product } from 'src/app/interfaces/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: Product[] = [];
  categoryId: string | null = null;
  limit: number = 10;
  offset: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.
      pipe
      (
        switchMap((params) => {
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productsService.getByCategory(this.categoryId, this.limit, this.offset);
          }

          return [];
        })
      ).subscribe((products) => {
        this.products = products;
      })
  }

  loadMore(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
      console.log(this.categoryId);
      if (this.categoryId) {

        this.offset += this.limit;
        this.productsService.getByCategory(this.categoryId, this.limit, this.offset).subscribe((productsApi: Product[]) => {
          this.products = this.products.concat(productsApi);

        });
      }
    });

  }

}
