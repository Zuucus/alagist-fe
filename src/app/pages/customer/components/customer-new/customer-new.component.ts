import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { CustomerServicesService } from '../../services/customer-services.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent {
  breadCrumbItems: any[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'customer', routerLink: '/customer' },
    { label: 'New', routerLink: '/customer/new' },
  ];

  formGroup: FormGroup = new FormGroup([]);
  progressBar = false;
  usersList: any = [];
  minDate= new Date();

  genderOptionsList = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];


  customer:any = {
  };



  constructor(private changeDetector: ChangeDetectorRef,
    private customerService: CustomerServicesService,
    private zooMessageService: ZooMessageService,
    private router: Router) {}



  getUsersList(event: any) {
    this.progressBar = true;
    this.usersList = [];
    this.progressBar = false;
  }

  onSelectDateChange() {
    console.log(this.customer);
  }

  OnTimeChange(event: any) {
    console.log(event);
  }

  save() {
    console.log(this.customer);
    this.progressBar =true;
    this.customerService.addCustomers(this.customer).subscribe({
      next: (response) => {
        this.progressBar = false;
        this.zooMessageService.sendSuccess('customer added successfully');
        this.router.navigate(['/customer']);
      },
      error: (error) => {
        this.progressBar = false;
        this.zooMessageService.sendError('Error while adding customer');
      }
    })
  }

  OnCancel() {
    console.log('cancel');
    this.router.navigate(['/customer']);
  }


  }
