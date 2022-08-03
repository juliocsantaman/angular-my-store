/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
/* END OF MODULES */

/* COMPONENTS */
import { TasksComponent } from './pages/tasks/tasks.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
/* END OF COMPONENTS */



@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
