/* MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* END OF MODULES */

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
/* END OF COMPONENTS */

/* PIPES */

/* END OF PIPES */

/* DIRECTIVES */

/* END OF DIRECTIVES */

/* INTERCEPTORS */
import { TimeInterceptor } from './interceptors/time-interceptor/time.interceptor';
import { TokenInterceptor } from './interceptors/token-interceptor/token.interceptor';
/* END OF INTERCEPTORS */



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
