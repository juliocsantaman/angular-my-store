/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
/* END OF MODULES */

/* COMPONENTS */
import { LayoutComponent } from './components/layout/layout.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';
/* END OF COMPONENTS */



@NgModule({
  declarations: [
    LayoutComponent,
    AdminConfigComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class CmsModule { }
