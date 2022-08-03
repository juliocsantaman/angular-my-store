import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './website/components/layout/layout.component';
import { AdminComponent } from './website/pages/admin/admin.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { HomeComponent } from './website/pages/home/home.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { SignInComponent } from './website/pages/sign-in/sign-in.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:
    [
      {
        path: '', redirectTo:'/sign-in', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'category/:id', component: CategoryComponent
      },
      {
        path: 'not-found', component: NotFoundComponent
      },
      {
        path: 'my-cart', component: MyCartComponent
      },
      {
        path: 'sign-in', component: SignInComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'recovery', component: RecoveryComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'admin', component: AdminComponent
      },
      {
        path: 'product-detail/:id', component: ProductDetailComponent
      },

    ]
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },

  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
