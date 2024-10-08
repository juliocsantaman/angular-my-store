import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';

import { CategoryComponent } from './category.component';



@NgModule({
  declarations: [ CategoryComponent ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class CategoryModule { }
