import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';

  getServicesList(filterValues: any) {
    return this.http.get<any>(this.mockURl + 'appointment-list.json');
   // return this.http.get('/appointments?' + this.utilityService.convertObjectToQueryString(filterValues));
  }

  addService(service: any) {
    return this.http.post('/services', service);
  }

}
