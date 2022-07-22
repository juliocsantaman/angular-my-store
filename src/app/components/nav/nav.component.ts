import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store-service/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMenu: boolean = false;
  counter: number = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }

  toggleMenu(): void {
    console.log('toggle menu')
    this.showMenu = !this.showMenu;
  }

}
