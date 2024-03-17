import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from '../../utils/event-utils';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-appointments-new',
  templateUrl: './appointments-new.component.html',
  styleUrls: ['./appointments-new.component.scss']

})
export class AppointmentsNewComponent {

 breadCrumbItems: any[] = [
  { label: 'Home', routerLink: '/home' },
  { label: 'Appointments', routerLink: '/appointments' },
  { label: 'New', routerLink: '/appointments/new' },
];

formGroup: FormGroup = new FormGroup([]);
progressBar = false;
usersList: any = [];
minDate= new Date();


appointment:any = {
};

calendarVisible = signal(true);
calendarOptions = signal<CalendarOptions>({
  plugins: [
    interactionPlugin,
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
  ],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
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
  eventsSet: this.handleEvents.bind(this)
  /* you can update a remote database when these fire:
  eventAdd:
  eventChange:
  eventRemove:
  */
});
currentEvents = signal<EventApi[]>([]);

constructor(private changeDetector: ChangeDetectorRef) {
}


getUsersList(event: any) {
  this.progressBar = true;
  this.usersList = [];
  this.progressBar = false;
}

onSelectDateChange() {
  console.log(this.appointment);
}

OnTimeChange(event: any) {
  console.log(event);
}

save() {
  console.log(this.appointment);
}

OnCancel() {
  console.log('cancel');
}

handleCalendarToggle() {
  this.calendarVisible.update((bool) => !bool);
}

handleWeekendsToggle() {
  this.calendarOptions.mutate((options) => {
    options.weekends = !options.weekends;
  });
}

handleDateSelect(selectInfo: DateSelectArg) {
  const title = prompt('Please enter a new title for your event');
  const calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  }
}

handleEventClick(clickInfo: EventClickArg) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
  }
}

handleEvents(events: EventApi[]) {
  this.currentEvents.set(events);
  this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
}

}
