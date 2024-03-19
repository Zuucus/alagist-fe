import { ChangeDetectorRef, Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { AppointmentsService } from '../../services/appointments.service';


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



constructor(private changeDetector: ChangeDetectorRef,
  private appointmentsService: AppointmentsService,
  private zooMessageService: ZooMessageService,
  private router: Router) {}



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
  this.router.navigate(['/appointments']);
}

OnCancel() {
  console.log('cancel');
  this.router.navigate(['/appointments']);
}



}
