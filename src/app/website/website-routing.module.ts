import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:
      [
        {
          path: '',
          redirectTo: '/sign-in',
          pathMatch: 'full'
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'category',
          loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
          data: {
            preload: true
          }
        },
        {
          path: 'my-cart',
          component: MyCartComponent
        },
        {
          path: 'sign-in',
          component: SignInComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'recovery',
          component: RecoveryComponent
        },
        {
          path: 'profile',
          canActivate: [AuthGuard],
          component: ProfileComponent
        },
        {
          path: 'admin',
          component: AdminComponent
        },
        {
          path: 'product-detail/:id',
          component: ProductDetailComponent
        },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
