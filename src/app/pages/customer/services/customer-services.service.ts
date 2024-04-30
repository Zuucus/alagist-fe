import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

  constructor( private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';

  getCustomersList(filterValues: any) {
    return this.http.get<any>(this.mockURl + 'appointment-list.json');
   // return this.http.get('/appointments?' + this.utilityService.convertObjectToQueryString(filterValues));
  }

  addCustomers(appointment: any) {
    return this.http.post('/customers', appointment);
  }

}
