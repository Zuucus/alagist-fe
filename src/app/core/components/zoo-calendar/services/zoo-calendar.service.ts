import { Injectable } from '@angular/core';
import { DateSelectArg, EventClickArg } from '@fullcalendar/angular';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarEventDialogComponent } from '../calendar-event-dialog/calendar-event-dialog.component';
import { createEventId } from '../zoo-calendar/event-utils';

@Injectable({
  providedIn: 'root',
})
export class ZooCalendarService {
  constructor(
    public dialogService: DialogService,
    public dialogRef: DynamicDialogRef
  ) {}

  handleDateSelect(selectInfo: DateSelectArg) {
    this.dialogRef = this.dialogService.open(CalendarEventDialogComponent, {
      header: 'Create Event',
      width: '25%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {},
    });

    this.dialogRef.onClose.subscribe((result: any) => {
      const calendarApi = selectInfo.view.calendar;
      if (result) {
        calendarApi.addEvent({
          id: createEventId(),
          title: result.title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.dialogRef = this.dialogService.open(CalendarEventDialogComponent, {
      header: 'Update Event',
      width: '25%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        event: {
          title: clickInfo.event.title,
          start: clickInfo.event.start,
          end: clickInfo.event.end,
        },
      },
    });
    this.dialogRef.onClose.subscribe((result: any) => {
      if (result && result !== 'delete') {
        clickInfo.event.setProp('title', result.title);
        // clickInfo.event.setStart(result.start);
        // clickInfo.event.setEnd(result.end);
        // clickInfo.event.setAllDay(result.allDay);
      } else if (result === 'delete') {
        clickInfo.event.remove();
      }
    });
  }
}
