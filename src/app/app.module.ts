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
import { TodoComponent } from './components/todo/todo.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
/* END OF COMPONENTS */

/* PIPES */
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { TimeAgoPipe } from './pipes/timeAgo/time-ago.pipe';
/* END OF PIPES */

/* DIRECTIVES */
import { HighLightDirective } from './directives/high-light.directive';
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
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
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
    AdminComponent
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
