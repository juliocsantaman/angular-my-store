/* MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/* END OF MODULES */

/* COMPONENTS */
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
/* END OF COMPONENTS */

/* PIPES */
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { TimeAgoPipe } from './pipes/timeAgo/time-ago.pipe';
import { HighLightDirective } from './directives/high-light.directive';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
/* END OF PIPES */

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighLightDirective,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
