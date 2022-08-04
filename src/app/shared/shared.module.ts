import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

/* COMPONENTS */
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';
/* END OF COMPONENTS */

/* DIRECTIVES */
import { HighLightDirective } from './directives/high-light.directive';
/* END OF DIRECTIVES */

/* PIPES */
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { TimeAgoPipe } from './pipes/timeAgo/time-ago.pipe';
/* END OF PIPES */



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ImgComponent,
    HighLightDirective,
    ReversePipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ProductComponent,
    ProductsComponent,
    ImgComponent,
    HighLightDirective,
    ReversePipe,
    TimeAgoPipe
  ]
})
export class SharedModule { }
