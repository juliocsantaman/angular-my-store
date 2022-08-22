import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
