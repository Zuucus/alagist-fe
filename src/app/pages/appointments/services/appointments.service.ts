import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { en } from '@fullcalendar/core/internal-common';
import { UtilityService } from 'src/app/core/services/utility.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';
  private url  = environment.APIURL+'/appointment';

  getAppointmentsList(filterValues: any) {
    //return this.http.get<any>(this.mockURl + 'appointment-list.json');
   //return this.http.get(this.url+'/appointment?' + this.utilityService.convertObjectToQueryString(filterValues));
   return this.http.get(this.url+'/appointment');
  }

  addAppointment(appointment: any) {
    return this.http.post('/appointments', appointment);
  }


}
