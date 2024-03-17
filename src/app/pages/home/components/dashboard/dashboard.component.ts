import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  breadCrumbItems:any[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Dashboard', routerLink: '/home/dashboard' },
  ];



  upgrade(){

  }

  addAppointment(){

  }
}
