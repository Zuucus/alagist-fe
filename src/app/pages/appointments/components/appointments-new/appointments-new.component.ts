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

// model appointment {
//   id                   Int                    @id @default(autoincrement())
//   customerId           Int
//   branchId             Int
//   vendorId             Int
//   appointmentDate      DateTime
//   appointmentStartTime DateTime
//   appointmentEndTime   DateTime?
//   employeeId           Int?
//   appointmentType      APPOINTMENT_TYPE       @default(WALK_IN)
//   status               APPOINTMENT_STATUS     @default(BOOKED)
//   createdBy            Int?
//   createdAt            DateTime               @default(now())
//   updatedAt            DateTime               @updatedAt
//   Customer             customer               @relation(fields: [customerId], references: [id])
//   Vendor               vendor                 @relation(fields: [vendorId], references: [id])
//   Employee             vendorBranchEmployees? @relation(fields: [employeeId], references: [id])
//   appointmentService   appointmentService[]
//   appointmentPayment   appointmentPayment[]
// }

formGroup: FormGroup = new FormGroup([]);
progressBar = false;
usersList: any = [];
minDate= new Date();


appointment:any = {
  customerId: 1,
  branchId: 1,
  vendorId: 1,
  appointmentDate: new Date(),
  appointmentStartTime: new Date(),
  appointmentEndTime: new Date(),
  employeeId: 1,
  appointmentType: 'ONLINE_BOOKING',
  status: 'BOOKED',
  appointmentService: [],
  appointmentPayment: []
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
  this.progressBar =true;
  this.appointmentsService.addAppointment(this.appointment).subscribe({
    next: (response) => {
      this.progressBar = false;
      this.zooMessageService.sendSuccess('Appointment added successfully');
      this.router.navigate(['/appointments']);
    },
    error: (error) => {
      this.progressBar = false;
      this.zooMessageService.sendError('Error while adding appointment');
    }
  })
}

OnCancel() {
  console.log('cancel');
  this.router.navigate(['/appointments']);
}



}
