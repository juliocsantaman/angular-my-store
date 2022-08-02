import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '0',
    title: '',
    price: 0,
    images: [''],
    description: '',
    category: {id:'0', name: ''},
    taxes: 0
  };
  @Input() isAddProduct: boolean = false;
  @Input() productIndex: number = -1;
  @Input() showSlider: boolean = false;
  @Input() statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() deletedProduct = new EventEmitter<number>();
  @Output() detailShown = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.addedProduct.emit(this.product);
  }

  deleteProduct(): void {
    this.deletedProduct.emit(this.productIndex);
  }

  showDetail(): void {
    this.detailShown.emit(this.product.id);
    // console.log('id: ' + this.product.id);
    // this.router.navigate(['/product-detail', this.product.id]);
  }

}
