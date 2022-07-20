import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  // product: Product = {
  //   id: '1',
  //   name: 'Product 1',
  //   price: 100,
  //   image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-3-product-tile-desktop?wid=765&hei=472&dpr=off'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
