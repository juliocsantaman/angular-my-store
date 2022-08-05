import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store-service/store.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { CategoriesService } from 'src/app/services/categories-service/categories.service';
import { Category } from 'src/app/interfaces/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMenu: boolean = false;
  counter: number = 0;
  account: string | null | undefined = '';
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });

    this.authService.user$.subscribe((data) => {
      this.account = data?.email;
    })

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

  logout(): void {
    this.authService.logout();
    this.account = null;
    this.router.navigate(['']);
  }



}
