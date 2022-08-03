import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store-service/store.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';
import { Category } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMenu: boolean = false;
  counter: number = 0;
  account: string = '';
  token: string | null = '';
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private tokenService: TokenService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });

    this.tokenService.token$.subscribe((token) => {
      this.token = token;

      this.authService.profile().subscribe((profile) => {
        this.account = profile.email;
      });
    });

    this.getAllCategories();
  }

  toggleMenu(): void {
    console.log('toggle menu')
    this.showMenu = !this.showMenu;
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }



}
