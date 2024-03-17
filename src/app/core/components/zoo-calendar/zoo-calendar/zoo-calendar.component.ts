import { Component, Input, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/angular';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarEventDialogComponent } from '../calendar-event-dialog/calendar-event-dialog.component';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'zoo-calendar',
  templateUrl: './zoo-calendar.component.html',
  styleUrls: ['./zoo-calendar.component.scss'],
})
export class ZooCalendarComponent implements OnInit {
  calendarVisible = true;
  @Input() calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    // eventAdd: this.handleEventAdd.bind(this),
    // eventChange: this.handleEventChange.bind(this),
    // eventRemove: this.handleEventRemove.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  ngOnInit() {}

  constructor(
    public dialogService: DialogService,
    public dialogRef: DynamicDialogRef
  ) {}

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

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

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}
