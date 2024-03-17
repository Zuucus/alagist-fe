import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

  ]
})
export class PagesModule { }
