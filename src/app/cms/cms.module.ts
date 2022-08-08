/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { SharedModule } from '../shared/shared.module';
/* END OF MODULES */

/* COMPONENTS */
import { TasksComponent } from './pages/tasks/tasks.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminConfigComponent } from './components/admin-config/admin-config.component';
/* END OF COMPONENTS */



@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent,
    AdminConfigComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule
  ]
})
export class CmsModule { }
