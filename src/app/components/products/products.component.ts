import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  shoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://images.pexels.com/photos/5446308/pexels-photo-5446308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://images.pexels.com/photos/1181770/pexels-photo-1181770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '5',
      name: 'Casa para perro',
      price: 34,
      image: 'https://images.pexels.com/photos/5942742/pexels-photo-5942742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '6',
      name: 'Gafas',
      price: 3434,
      image: 'https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addedProduct(product: Product): void {
    this.shoppingCart.push(product);
    //this.calculateTotal();
    this.total = this.shoppingCart.reduce((add, product) => add + product.price, 0);
    console.log(this.shoppingCart);
  }

  calculateTotal(): void {
    this.total = 0;
    this.shoppingCart.map((product) => {
      this.total += product.price;
    });
  }

}
