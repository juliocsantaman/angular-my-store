/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { QuicklinkModule } from 'ngx-quicklink';
/* END OF MODULES */

/* COMPONENTS */
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';
/* END OF COMPONENTS */

/* PAGES */
import { HomeComponent } from './pages/home/home.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
/* END OF PAGES */

/* ANGULAR MATERIAL */
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
/* END OF ANGULAR MATERIAL */



@NgModule({
  declarations: [
    HomeComponent,
    MyCartComponent,
    SignInComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    AdminComponent,
    ProductDetailComponent,
    LayoutComponent,
    LoginComponent,
    SignUpComponent,
    ShoppingCartComponent,
    NavComponent,
    AdminConfigComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
