import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = '';
  product: Product | null = null;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe
    (
      switchMap((params) => {
        this.productId = params.get('id');
        if(this.productId) {
          return this.productsService.getProduct(this.productId);
        }
        return [null];
      })
    ).subscribe((product) => {
      this.product = product;
    })
  }

  goToBack(): void {
    this.location.back();
  }
}
