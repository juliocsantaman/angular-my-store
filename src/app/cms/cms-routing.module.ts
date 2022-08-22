import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* COMPONENTS */
import { LayoutComponent } from './components/layout/layout.component';
/* END OF COMPONENTS */

const routes: Routes =
[
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
