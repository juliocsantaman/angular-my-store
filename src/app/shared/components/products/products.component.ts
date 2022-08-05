import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../../interfaces/product.model';
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
  @Input() products: Product[] = [];
  @Input()
  set productId(id: string | null) {
    if(id) {
      this.showDetail(id);
    }
  }
  productChoosen: Product = {
    id: '0',
    title: '',
    price: 0,
    images: [''],
    description: '',
    category: {id:'0', name: ''},
    taxes: 0
  };
  today: Date = new Date();
  showProductDetail: boolean = false;
  @Input() newTitle: string = 'Angular My Store';
  @Input() userMode: string = 'default';
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  @Output() loadMore: EventEmitter<string> = new EventEmitter<string>();

  constructor(private storeService: StoreService, private productsService: ProductsService) { }

  ngOnInit(): void {
    //this.shoppingCart = this.storeService.getShoppingCart();
    this.total = this.storeService.getTotal();
  }

  addedProduct(product: Product): void {
    this.storeService.addedProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(): void {
    this.showProductDetail = !this.showProductDetail;
  }

  showDetail(id: string): void {
    this.statusDetail = 'loading';

    if(!this.showProductDetail) {
      this.showProductDetail = true;
    }

    this.productsService.getProduct(id).subscribe(
      {
        next: (product) => {

          this.productChoosen = product;
          this.statusDetail = 'success';
          //this.toggleProductDetail();
        },
        error: (e) => {
          console.error(e);
          this.statusDetail = 'error';
          console.error(e);
          alert(e);
        }
      }
    );

  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'bla bla bla',
      images: ['https://www.pitzonemxli.com/wp-content/uploads/2020/05/7501055300075-00-CH1200Wx1200H.jpg'],
      price: 1200,
      categoryId: 2
    }
    this.productsService.create(product).subscribe((product) => {
      console.log(product);
      this.products.unshift(product);
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'New Product Coca'
    };

    const id = this.productChoosen.id;

    this.productsService.update(id, changes).subscribe((productWithChanges) => {

      console.log(productWithChanges);

      const productIndex = this.products.findIndex((product) => product.id === id);

      this.products[productIndex] = productWithChanges;
      this.productChoosen = productWithChanges;

    });
  }

  deleteProduct() {
    const id = this.productChoosen.id;
    this.productsService.delete(id).subscribe((data) => {
      console.log(data);
      const productIndex = this.products.findIndex((product) => product.id === this.productChoosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  onLoadMore(): void {
    this.loadMore.emit();
  }

}
