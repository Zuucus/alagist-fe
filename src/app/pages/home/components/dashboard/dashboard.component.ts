import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router:Router) { }

  breadCrumbItems:any[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Dashboard', routerLink: '/home/dashboard' },
  ];



  upgrade(){

  }

  addAppointment(){
    this.router.navigate(['/appointments/new']);
  }
}
