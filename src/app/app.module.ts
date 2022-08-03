/* MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* END OF MODULES */

/* COMPONENTS */
import { AppComponent } from './app.component';
import { TodoComponent } from './website/components/todo/todo.component';
import { ImgComponent } from './website/components/img/img.component';
import { ProductComponent } from './website/components/product/product.component';
import { ProductsComponent } from './website/components/products/products.component';
import { NavComponent } from './website/components/nav/nav.component';
import { ShoppingCartComponent } from './website/components/shopping-cart/shopping-cart.component';
import { AdminConfigComponent } from './website/components/admin-config/admin-config.component';
import { LoginComponent } from './website/components/login/login.component';
import { SignUpComponent } from './website/components/sign-up/sign-up.component';
/* END OF COMPONENTS */

/* PIPES */
import { ReversePipe } from './website/pipes/reverse/reverse.pipe';
import { TimeAgoPipe } from './website/pipes/timeAgo/time-ago.pipe';
/* END OF PIPES */

/* DIRECTIVES */
import { HighLightDirective } from './website/directives/high-light.directive';
/* END OF DIRECTIVES */

/* ANGULAR MATERIAL */
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
/* END OF ANGULAR MATERIAL */

/* INTERCEPTORS */
import { TimeInterceptor } from './interceptors/time-interceptor/time.interceptor';
import { TokenInterceptor } from './interceptors/token-interceptor/token.interceptor';
/* END OF INTERCEPTORS */

/* PAGES */
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { SignInComponent } from './website/pages/sign-in/sign-in.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { AdminComponent } from './website/pages/admin/admin.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';
/* END OF PAGES */

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
    ShoppingCartComponent,
    AdminConfigComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    MyCartComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    CategoryComponent,
    SignInComponent,
    AdminComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
