import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from '../guards/auth-guard/auth.guard';
import { SignInGuard } from '../guards/sign-in-guard/sign-in.guard';
import { ExitGuard } from '../guards/exit-guard/exit.guard';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:
      [
        {
          path: '',
          canActivate: [SignInGuard],
          component: SignInComponent
        },
        {
          path: 'home',
          canActivate: [AuthGuard],
          component: HomeComponent
        },
        {
          path: 'category',
          canActivate: [AuthGuard],
          loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
          data: {
            preload: true
          }
        },
        {
          path: 'my-cart',
          canActivate: [AuthGuard],
          component: MyCartComponent
        },
        {
          path: 'register',
          canDeactivate: [ExitGuard],
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
          path: 'product-detail/:id',
          canActivate: [AuthGuard],
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
