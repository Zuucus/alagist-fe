import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { EmployeeServicesService } from '../../services/emploee-services.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent {

  breadCrumbItems: any[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Employee', routerLink: '/employee' },
    { label: 'New', routerLink: '/employee/new' },
  ];

  formGroup: FormGroup = new FormGroup([]);
  progressBar = false;
  usersList: any = [];
  minDate= new Date();

  genderOptionsList = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];


  employee:any = {
  };



  constructor(private changeDetector: ChangeDetectorRef,
    private employeeService: EmployeeServicesService,
    private zooMessageService: ZooMessageService,
    private router: Router) {}



  getUsersList(event: any) {
    this.progressBar = true;
    this.usersList = [];
    this.progressBar = false;
  }

  onSelectDateChange() {
    console.log(this.employee);
  }

  OnTimeChange(event: any) {
    console.log(event);
  }

  save() {
    console.log(this.employee);
    this.progressBar =true;
    this.employeeService.addEmployee(this.employee).subscribe({
      next: (response) => {
        this.progressBar = false;
        this.zooMessageService.sendSuccess('Employee added successfully');
        this.router.navigate(['/employee']);
      },
      error: (error) => {
        this.progressBar = false;
        this.zooMessageService.sendError('Error while adding employee');
      }
    })
  }

  OnCancel() {
    console.log('cancel');
    this.router.navigate(['/employee']);
  }


  }
