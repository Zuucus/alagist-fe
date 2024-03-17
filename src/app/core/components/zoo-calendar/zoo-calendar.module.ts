import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooCalendarComponent } from './zoo-calendar/zoo-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEventDialogComponent } from './calendar-event-dialog/calendar-event-dialog.component'; // a plugin!
import { ZooInputBoxModule } from '../zoo-input-box/zoo-input-box.module';
import { ZooButtonModule } from '../zoo-button/zoo-button.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZooCalendarService } from './services/zoo-calendar.service';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [ZooCalendarComponent, CalendarEventDialogComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    ZooInputBoxModule,
    ZooButtonModule,
  ],
  exports: [ZooCalendarComponent],
  providers: [DialogService, DynamicDialogRef, ZooCalendarService],
})
export class ZooCalendarModule {}
