import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { ZooPageModule } from 'src/app/core/components/zoo-page/zoo-page.module';
import { ZooTableModule } from 'src/app/core/components/zoo-table/zoo-table.module';
import { ZooButtonModule } from 'src/app/core/components/zoo-button/zoo-button.module';
import { ZooCardModule } from 'src/app/core/components/zoo-card/zoo-card.module';
import { ZooLabelModule } from 'src/app/core/components/zoo-label/zoo-label.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { AppointmentsNewComponent } from './components/appointments-new/appointments-new.component';
import { AppointmentsViewComponent } from './components/appointments-view/appointments-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ZooDateModule } from 'src/app/core/components/zoo-date/zoo-date.module';
import { ZooAutocompleteModule } from 'src/app/core/components/zoo-autocomplete/zoo-autocomplete.module';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';


@NgModule({
  declarations: [
    AppointmentsListComponent,
    AppointmentsNewComponent,
    AppointmentsViewComponent,
    AppointmentCalendarComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    ZooPageModule,
    ZooTableModule,
    ZooButtonModule,
    ZooCardModule,
    ZooLabelModule,
    ZooDateModule,
    ZooAutocompleteModule,
    TableModule,
    FullCalendarModule
  ],
  providers: [TitleCasePipe, DatePipe, DialogService, DynamicDialogRef],
})
export class AppointmentsModule { }
