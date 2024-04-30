import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services-new',
  templateUrl: './services-new.component.html',
  styleUrls: ['./services-new.component.scss']
})
export class ServicesNewComponent {


 breadCrumbItems: any[] = [
  { label: 'Home', routerLink: '/home' },
  { label: 'Services', routerLink: '/services' },
  { label: 'New', routerLink: '/services/new' },
];

formGroup: FormGroup = new FormGroup([]);
progressBar = false;
usersList: any = [];
minDate= new Date();
currency = 'INR';


service:any = {
};



constructor(private changeDetector: ChangeDetectorRef,
  private servicesService: ServicesService,
  private zooMessageService: ZooMessageService,
  private router: Router) {}



getUsersList(event: any) {
  this.progressBar = true;
  this.usersList = [];
  this.progressBar = false;
}

onSelectDateChange() {
  console.log(this.service);
}

OnTimeChange(event: any) {
  console.log(event);
}

save() {
  console.log(this.service);
  this.progressBar =true;
  this.servicesService.addService(this.service).subscribe({
    next: (response) => {
      this.progressBar = false;
      this.zooMessageService.sendSuccess('Appointment added successfully');
      this.router.navigate(['/services']);
    },
    error: (error) => {
      this.progressBar = false;
      this.zooMessageService.sendError('Error while adding appointment');
    }
  })
}

OnCancel() {
  console.log('cancel');
  this.router.navigate(['/services']);
}



}


